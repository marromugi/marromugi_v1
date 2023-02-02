import { Flex } from '@/components/ui/atoms/box'
import { Box } from '@/components/ui/atoms/box/box'
import { IconButton } from '@/components/ui/atoms/button'
import { TransitionLink } from '@/components/ui/atoms/link'
import { Text } from '@/components/ui/atoms/text'
import tokens from '@/const/tokens/tokens'
import { useTheme } from '@/hooks/theme'
import { mq } from '@/utils/breakpoint'
import { css } from '@emotion/react'

export const Header = () => {
  const { toggleTheme } = useTheme()
  return (
    <Box position={'relative'} zIndex={99}>
      <div
        css={css`
          width: 42em;
          height: 80px;
          padding: 0 2em;
          margin: 0 auto;
          position: fixed;
          ${mq('sm')} {
            width: 95vw;
            padding: 0 1em;
          }
        `}
      >
        <Flex
          width={'100%'}
          height={'100%'}
          direction="row"
          items={'center'}
          justify={'space-between'}
        >
          <TransitionLink href={'/'}>
            <Text size="200" weight="700" space={{ x: '400' }}>
              marromugi
            </Text>
          </TransitionLink>
          <Flex direction="row" items={'center'} gap={'1em'}>
            <IconButton
              icon={'theme'}
              onClick={() => {
                toggleTheme()
              }}
            />
          </Flex>
        </Flex>
      </div>
    </Box>
  )
}
