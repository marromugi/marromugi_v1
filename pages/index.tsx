import { Flex } from '@/components/ui/atoms/box/flex'
import { useLoading } from '@/hooks/loading/useLoading'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import { TimelineList } from '@/components/feature/timeline/timelineList/timelineList'
import tokens from '@/const/tokens/tokens'
import { semantics } from '@/const/colors/semantics'
import { useTheme } from '@/hooks/theme'
import { NEWT_API_TOKEN, NEWT_SPACE_ID } from '@/const/auth/newt'
import { Timeline } from '@/components/feature/timeline/timelineListItem/type'
import { createClient } from 'newt-client-js'

export default function Home({ timelines }: { timelines: Timeline[] }) {
  const { theme } = useTheme()
  const { setLoading, isLoading } = useLoading()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const boxStyle = css`
    width: 100%;
    margin: ${tokens.spacing[600].value} 0;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      width: 4px;
      background: ${semantics.border.secondary[theme].value};
    }
  `

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      <Flex direction="column">
        <div css={boxStyle}>
          <TimelineList timelines={timelines ?? []} />
        </div>
      </Flex>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const client = createClient({
    spaceUid: NEWT_SPACE_ID,
    token: NEWT_API_TOKEN,
    apiType: 'cdn',
  })
  const articles = await client.getContents({
    appUid: 'timeline',
    modelUid: 'timeline',
  })

  return { props: { timelines: articles.items as Timeline[] }, revalidate: 60 }
}
