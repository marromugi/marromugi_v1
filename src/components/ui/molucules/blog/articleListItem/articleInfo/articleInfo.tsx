import { Flex } from '@/components/ui/atoms/box'
import { Box } from '@/components/ui/atoms/box/box'
import { Icon } from '@/components/ui/atoms/icon'
import { Text, Word } from '@/components/ui/atoms/text'

export const ArticleInfo = () => {
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
            2022-12-12
          </Text>
        </Flex>
      </Box>
      <Box margin={'0.5em 0 0 0'}>
        <Flex items={'center'}>
          <Box width={'6em'}>
            <Word size={'300'} weight={'700'} family={'secondary'}>
              カテゴリー
            </Word>
          </Box>
          <Flex gap={'8px'}>
            <Word size={'300'} weight={'700'} family={'secondary'}>
              デザイン
            </Word>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
