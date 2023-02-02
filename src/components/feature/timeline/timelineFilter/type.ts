import { TimelineContentType } from '../timelineListItem/type'

export type TimelineFilterProps = {
  states: TimelineContentType[]
  onChange: (states: TimelineContentType[]) => void
}
