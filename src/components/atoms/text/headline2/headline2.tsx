import tokens from '@/const/tokens/tokens'
import { css } from '@emotion/react'
import { Headline2Props } from './type'

export const Headline2 = ({
  size = '600',
  family = 'secondary',
  space = { x: '300', y: '300' },
  children,
}: Headline2Props) => {
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[700].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '300'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '300'};
  `
  return <h2 css={style}>{children}</h2>
}
