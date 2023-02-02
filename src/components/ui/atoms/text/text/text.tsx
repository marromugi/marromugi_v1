import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { TextProps } from './type'

export const Text = ({
  size = '300',
  weight = '400',
  family = 'primary',
  space = { x: '300', y: '300' },
  color = 'primary',
  children,
}: TextProps) => {
  const { theme } = useTheme()
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[weight].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '1.5'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '0'};
    color: ${semantics.text.body[color][theme].value};
  `
  return <p css={style}>{children}</p>
}
