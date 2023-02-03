import { Flex } from '@/components/ui/atoms/box'
import { Box } from '@/components/ui/atoms/box/box'
import { Icon } from '@/components/ui/atoms/icon'
import { Text, Word } from '@/components/ui/atoms/text'
import { zeroPadding } from '@/utils/text'
import { useMemo } from 'react'
import { ArticleInfoProps } from './type'

export const ArticleInfo = ({ timeline }: ArticleInfoProps) => {
  console.log(timeline)
  const publishDate = useMemo(() => new Date(timeline.publish), [timeline])

  if (!timeline.blog) {
    return <></>
  }

  return (
    <Box padding={'24px 0px'} radius={'24px'} background={'secondary'}>
      <Flex justify={'space-between'} items={'center'}>
        <Text weight={'700'} size={'300'} family={'secondary'}>
          記事情報
        </Text>
        <Icon icon={'info'} size={'600'} />
      </Flex>
      <Box margin={'1.6em 0 0 0'}>
        <Flex items={'center'}>
          <Box width={'6em'}>
            <Word size={'300'} weight={'700'} family={'secondary'}>
              公開日
            </Word>
          </Box>
          <Text size={'300'} weight={'700'} family={'secondary'}>
            {`${publishDate.getFullYear()}-${zeroPadding(
              publishDate.getMonth() + 1,
              2
            )}-${zeroPadding(publishDate.getDate(), 2)}`}
          </Text>
        </Flex>
      </Box>
      {timeline.blog.category.name && (
        <Box margin={'0.5em 0 0 0'}>
          <Flex items={'center'}>
            <Box width={'6em'}>
              <Word size={'300'} weight={'700'} family={'secondary'}>
                カテゴリー
              </Word>
            </Box>
            <Flex gap={'8px'}>
              <Word size={'300'} weight={'700'} family={'secondary'}>
                {`${timeline.blog.category.name}`}
              </Word>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  )
}
