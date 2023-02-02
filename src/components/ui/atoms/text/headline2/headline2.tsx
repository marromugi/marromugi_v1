import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { Headline2Props } from './type'

export const Headline2 = ({
  size = '600',
  family = 'secondary',
  space = { x: '300', y: '300' },
  color = 'primary',
  children,
}: Headline2Props) => {
  const { theme } = useTheme()
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[700].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '1.5'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '0'};
    color: ${semantics.text.body[color][theme].value};
  `
  return <h2 css={style}>{children}</h2>
}
