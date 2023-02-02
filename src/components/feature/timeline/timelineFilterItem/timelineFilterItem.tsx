import { Flex } from '@/components/ui/atoms/box'
import { Text } from '@/components/ui/atoms/text'
import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { TimelineFilterItemProps } from './type'
import { getTimelineTypeText } from './util'

export const TimelineFilterItem = ({
  category,
  isActive,
  onChange,
}: TimelineFilterItemProps) => {
  const { theme } = useTheme()
  const dotStyle = css`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    border: solid 3px ${semantics.button.timeline[category][theme].value};
    cursor: pointer;
    background: ${isActive
      ? semantics.button.timeline[category][theme].value
      : semantics.background.secondary[theme].value};
  `

  const buttonStyle = css`
    background: transparent;
    border: none;
    border-radius: 9999px;
    padding: 2px;

    &:focus {
      outline: solid 3px pink;
    }

    &:active {
      transform: scale(1.2);
    }
  `

  return (
    <Flex gap={'16px'} items={'center'}>
      <button css={buttonStyle} onClick={() => onChange(!isActive)}>
        <span css={dotStyle}></span>
      </button>
      <Text size={'100'} weight={'700'} family={'secondary'}>
        {getTimelineTypeText(category)}
      </Text>
    </Flex>
  )
}
