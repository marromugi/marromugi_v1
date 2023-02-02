import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useLoading } from '@/hooks/loading/useLoading'
import { useTheme } from '@/hooks/theme'
import { mq } from '@/utils/breakpoint'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { Header } from '../../molucules/common/header'
import { ContainerProps } from './type'

export const Container = ({ children }: ContainerProps) => {
  const router = useRouter()
  const { theme } = useTheme()
  const { isLoading, setLoading } = useLoading()
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperStyle = css`
    width: 42em;
    height: ${isLoading ? '30vh' : '100vh'};
    height: ${isLoading ? '30dvh' : '100dvh'};
    ${mq('sm')} {
      width: 95vw;
      height: ${isLoading ? '40vh' : '100vh'};
      height: ${isLoading ? '40dvh' : '100dvh'};
    }
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: ${isLoading ? '30px' : '6px'};
    background: ${isLoading
      ? semantics.background.primary[theme].value
      : semantics.background.secondary[theme].value};
    transition: 0.5s;
  `
  const containerStyle = css`
    width: 100%;
    position: relative;
  `

  const childrenStyle = css`
    width: 100%;
    padding: 80px 2em 0 2em;
    ${mq('sm')} {
      padding: 80px 0.5em 0 0.5em;
    }
  `

  useEffect(() => {
    setLoading(true)
    // setTimeout(() => {
    //   if (containerRef.current) {
    //     containerRef.current.scroll({
    //       top: 0,
    //     })
    //   }
    // }, 100)
  }, [router.asPath, setLoading])

  return (
    <div ref={containerRef} css={wrapperStyle}>
      <div css={containerStyle}>
        <Header />
        <div css={childrenStyle}>{children}</div>
      </div>
    </div>
  )
}
