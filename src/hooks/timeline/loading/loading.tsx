import { timelineLoadingState } from '@/states/timeline'
import { useRecoilState } from 'recoil'

export const useTimelineLoading = () => {
  const [isTimelineLoading, setTimelineLoading] =
    useRecoilState(timelineLoadingState)
  return { isTimelineLoading, setTimelineLoading }
}
