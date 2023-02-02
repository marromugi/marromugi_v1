import { css } from '@emotion/react'
import { FlexboxProps } from './type'

export const Flex = ({
  direction = 'row',
  items,
  justify,
  gap,
  width,
  height,
  children,
}: FlexboxProps) => {
  const style = css`
    display: flex;
    ${direction && `flex-direction: ${direction};`}
    ${items && `align-items: ${items};`}
    ${justify && `justify-content: ${justify};`}
    ${gap && `gap: ${gap};`}
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
  `
  return <div css={style}>{children}</div>
}
