import tokens from '@/const/tokens/tokens'
import { css } from '@emotion/react'
import { Headline3Props } from './type'

export const Headline3 = ({
  size = '600',
  family = 'secondary',
  space = { x: '300', y: '400' },
  children,
}: Headline3Props) => {
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[700].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '300'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '300'};
  `
  return <h3 css={style}>{children}</h3>
}
