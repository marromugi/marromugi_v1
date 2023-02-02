import { semantics } from '@/const/colors/semantics'
import { TextProps } from '../../text/text/type'

export type IconProps = {
  icon: keyof typeof semantics.icon
  size?: TextProps['size']
}
