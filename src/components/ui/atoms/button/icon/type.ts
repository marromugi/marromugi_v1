import { semantics } from '@/const/colors/semantics'

export type IconButtonProps = {
  icon: keyof typeof semantics.icon
  onClick: () => void
}
