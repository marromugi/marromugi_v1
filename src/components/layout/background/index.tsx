import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { getColor } from '@/utils/color'
import { css } from '@emotion/react'
import { BackgroundProps } from './type'

export const Background = ({ children }: BackgroundProps) => {
  const { theme } = useTheme()
  const style = css`
    width: 100vw;
    height: 100vh;
    height: 100dvh; // ios
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${getColor(semantics.background.secondary, theme)};
  `

  return <div css={style}>{children}</div>
}
