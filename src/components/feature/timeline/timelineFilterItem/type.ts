import { semantics } from '@/const/colors/semantics'

export type TimelineFilterItemProps = {
  category: keyof typeof semantics.button.timeline
  isActive: boolean
  onChange: (state: boolean) => void
}
