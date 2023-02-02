import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { Headline3Props } from './type'

export const Headline3 = ({
  size = '600',
  family = 'secondary',
  space = { x: '300', y: '400' },
  color = 'primary',
  children,
}: Headline3Props) => {
  const { theme } = useTheme()
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[700].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '1.5'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '0'};
    color: ${semantics.text.body[color][theme].value};
  `
  return <h3 css={style}>{children}</h3>
}
