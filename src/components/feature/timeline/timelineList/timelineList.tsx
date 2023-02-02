import { Flex } from '@/components/ui/atoms/box'
import tokens from '@/const/tokens/tokens'
import { TimelineListItem } from '../timelineListItem/timelineListItem'
import { TimelineListProps } from './type'

export const TimelineList = ({ timelines }: TimelineListProps) => {
  return (
    <Flex direction={'column'} gap={tokens.spacing[500].value}>
      {timelines.map((t, i) => (
        <TimelineListItem key={i} timeline={t} />
      ))}
    </Flex>
  )
}
