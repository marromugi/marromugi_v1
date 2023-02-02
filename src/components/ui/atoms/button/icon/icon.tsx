import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { Icon } from '@/components/ui/atoms/icon'
import { IconButtonProps } from './type'

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  const { theme } = useTheme()
  const style = css`
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background: ${semantics.icon[icon].background[theme].value};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: 0.2s;

    &:focus {
      outline: solid 3px ${semantics.border.outline[theme].value};
    }

    &:active {
      transform: scale(1.1);
    }
  `
  return (
    <button type={'button'} css={style} onClick={onClick}>
      <Icon size={'400'} icon={icon} />
    </button>
  )
}
