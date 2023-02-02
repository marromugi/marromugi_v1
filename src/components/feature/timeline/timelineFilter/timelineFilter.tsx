import { Flex } from '@/components/ui/atoms/box'
import { Box } from '@/components/ui/atoms/box/box'
import { css } from '@emotion/react'
import { useState } from 'react'
import { TimelineFilterItem } from '../timelineFilterItem/timelineFilterItem'
import { TimelineFilterProps } from './type'

export const TimelineFilter = ({ onChange }: TimelineFilterProps) => {
  const dStyle = css`
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    background: red;
  `

  const [s, setS] = useState(false)

  return (
    <Box background="secondary" padding="32px 16px" radius="16px">
      <Flex gap={'24px'}>
        <TimelineFilterItem
          category={'frontend'}
          isActive={s}
          onChange={(s) => setS(s)}
        />
        <TimelineFilterItem
          category={'design'}
          isActive={s}
          onChange={(s) => setS(s)}
        />
        <TimelineFilterItem
          category={'ml'}
          isActive={s}
          onChange={(s) => setS(s)}
        />
      </Flex>
    </Box>
  )
}
