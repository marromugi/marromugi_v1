import tokens from '@/const/tokens/tokens'
import { css } from '@emotion/react'
import { TextProps } from './type'

export const Text = ({
  size = '300',
  weight = '400',
  family = 'primary',
  space = { x: '300', y: '300' },
  children,
}: TextProps) => {
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[weight].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '300'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '300'};
  `
  return <p css={style}>{children}</p>
}
