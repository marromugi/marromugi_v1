import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { WordProps } from './type'

export const Word = ({
  size = '300',
  color = 'primary',
  weight = '400',
  family = 'primary',
  space = { x: '300', y: '300' },
  children,
}: WordProps) => {
  const { theme } = useTheme()
  const style = css`
    font-size: ${tokens.fontsize[size].value};
    font-weight: ${tokens.fontweight[weight].value};
    font-family: ${tokens.fontfamily[family].value};
    line-height: ${!!space.y ? tokens.lineHeight[space.y].value : '300'};
    letter-spacing: ${!!space.x ? tokens.letterSpacing[space.x].value : '300'};
    color: ${semantics.text.body[color][theme].value};
  `
  return <span css={style}>{children}</span>
}
