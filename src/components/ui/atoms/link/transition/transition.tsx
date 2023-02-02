import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useLoading } from '@/hooks/loading/useLoading'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TransitionLinkProps } from './type'

export const TransitionLink = ({
  href,
  width = 'full',
  children,
}: TransitionLinkProps) => {
  const router = useRouter()
  const { theme } = useTheme()
  const { setLoading } = useLoading()
  const style = css`
    width: ${width === 'full' ? '100%' : 'auto'};
    text-decoration: none;

    &:focus: {
      outline: solid 2px ${semantics.border.outline[theme].value};
    }

    &:visited: {
      color: ${semantics.text.visited[theme].value};
    }
  `
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push(href)
    }, tokens.transition.primary.value)
  }
  return (
    <a href={href} css={style} onClick={onClick}>
      {children}
    </a>
  )
}
