import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { IconProps } from './type'
import { getIconSVG } from './util'

export const Icon = ({ icon, size = '300' }: IconProps) => {
  const { theme } = useTheme()
  const IconSvg = getIconSVG(icon, theme)
  return (
    <IconSvg
      size={tokens.fontsize[size].value}
      color={semantics.icon[icon].icon[theme].value}
    />
  )
}
