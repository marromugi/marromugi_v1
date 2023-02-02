import { TransitionLink } from '@/components/ui/atoms/link'
import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { css } from '@emotion/react'
import { Flex } from '@/components/ui/atoms/box'
import { Text } from '@/components/ui/atoms/text'
import { TimelineListItemProps } from './type'
import { getDateText } from '@/utils/date'
import { mq } from '@/utils/breakpoint'

export const TimelineListItem = ({ timeline }: TimelineListItemProps) => {
  const { theme } = useTheme()
  const containerStyle = css`
    width: 100%;
    background: ${semantics.background.secondary[theme].value};
    padding: ${tokens.spacing[400].value} ${tokens.spacing[300].value};
    border-radius: 16px;

    &:active {
      transform: scale(1.024);
    }
  `

  const dotStyle = css`
    display: block;
    top: calc(50% - 8px);
    left: -6px;
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    border: solid 3px ${semantics.background.secondary[theme].value};
    background: ${semantics.border.secondary[theme].value};
    position: absolute;
  `

  return (
    <div
      css={css`
        position: relative;
        padding: 0 0 0 42px;

        ${mq('sm')} {
          padding: 0 0 0 1em;
        }
      `}
    >
      <span css={dotStyle}></span>
      <div css={containerStyle}>
        {timeline.blog && (
          <TransitionLink href={`/${timeline.type}/${timeline.slug}`}>
            <Flex direction={'column'} gap={'8px'}>
              <Flex justify={'space-between'}>
                <Text
                  family={'secondary'}
                  size={'200'}
                  weight={'700'}
                  color={'secondary'}
                >
                  {getDateText(new Date(timeline.publish))}
                </Text>
              </Flex>
              <Text family={'secondary'} size={'200'} weight={'700'}>
                {timeline.title}
              </Text>
              {/* <Text
                family={'secondary'}
                size={'200'}
                weight={'700'}
                color={timeline.category}
              >
                {timeline.blog && timeline.blog.category}
              </Text> */}
            </Flex>
          </TransitionLink>
        )}
      </div>
    </div>
  )
}
