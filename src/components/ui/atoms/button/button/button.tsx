import { ButtonProps } from './type'
import { css } from '@emotion/react'
import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import tokens from '@/const/tokens/tokens'

export const Button = ({
  color = 'primary',
  size = 'lg',
  children,
  onClick,
}: ButtonProps) => {
  const { theme } = useTheme()
  const style = css`
    ${color !== 'none' &&
    `background: ${semantics.button[color][theme].value};`}
    ${color !== 'none' &&
    `color: ${semantics.text.button[color][theme].value};`}
    ${size === 'lg' &&
    `padding: ${tokens.spacing[300].value} ${tokens.spacing[500].value};`}
    ${size === 'md' &&
    `padding: ${tokens.spacing[300].value} ${tokens.spacing[400].value};`}
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    font-size: ${tokens.fontsize[200].value};
    font-weight: ${tokens.fontweight[700].value};
    letter-spacing: ${tokens.letterSpacing[400].value};

    &:focus {
      outline: solid 3px ${tokens.frog[700].value};
    }

    &:active {
      transform: scale(1.06);
    }
  `
  return (
    <button css={style} type="button" onClick={onClick}>
      {children}
    </button>
  )
}
