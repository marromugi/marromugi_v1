import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { getColor } from '@/utils/color'
import { css } from '@emotion/react'
import { ContainerProps } from './type'

export const Container = ({ children }: ContainerProps) => {
  const { theme } = useTheme()
  const style = css`
    width: 600px;
    height: 400px;
    overflow: scroll;
    border-radius: 30px;
    background: ${getColor(semantics.background.primary, theme)};
  `
  return <div css={style}>{children}</div>
}
