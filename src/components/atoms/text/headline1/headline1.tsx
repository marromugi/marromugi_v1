import tokens from '@/const/tokens/tokens'
import { css } from '@emotion/react'
import { Headline1Props } from './type'

export const Headline1 = ({
  size = '600',
  family = 'secondary',
  space = { x: '400', y: '400' },
  children,
}: Headline1Props) => {
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[700].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '300'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '300'};
  `
  return <h1 css={style}>{children}</h1>
}
