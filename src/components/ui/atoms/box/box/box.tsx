import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { BoxProps } from './type'

export const Box = ({
  width,
  height,
  margin,
  padding,
  position,
  background,
  radius,
  zIndex,
  children,
}: BoxProps) => {
  const { theme } = useTheme()
  const style = css`
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
     ${margin && `margin: ${margin};`}
     ${padding && `padding: ${padding};`}
     ${position && `position: ${position};`}
     ${background &&
    `background: ${semantics.background[background][theme].value};`}
     ${radius && `border-radius: ${radius};`}
     ${zIndex && `z-index: ${zIndex};`}
  `
  return <div css={style}>{children}</div>
}
