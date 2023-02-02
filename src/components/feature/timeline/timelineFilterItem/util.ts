import { semantics } from '@/const/colors/semantics'

export const getTimelineTypeText = (
  type: keyof typeof semantics.button.timeline
) => {
  switch (type) {
    case 'frontend':
      return 'フロントエンド'
    case 'design':
      return 'デザイン'
    case 'ml':
      return '機械学習'
  }
}
