import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { BackgroundProps } from './type'

export const Background = ({ children }: BackgroundProps) => {
  const { theme } = useTheme()
  const style = css`
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${semantics.background.secondary[theme].value};
    transition: 0.3s;

    * {
      &:focus {
        outline: solid 3px ${semantics.border.outline[theme].value};
      }
    }
  `

  return <div css={style}>{children}</div>
}
