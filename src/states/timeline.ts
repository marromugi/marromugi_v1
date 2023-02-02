import { atom } from 'recoil'

export const timelineLoadingState = atom<boolean>({
  key: 'timeline-loading',
  default: false,
})
