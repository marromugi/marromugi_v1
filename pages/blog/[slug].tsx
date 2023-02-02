import { PageTitle } from '@/components/ui/molucules/common/pageTitle'
import { useLoading } from '@/hooks/loading/useLoading'
import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArticleInfo } from '@/components/ui/molucules/blog/articleListItem/articleInfo/articleInfo'
import { BlogMarkdown } from '@/components/feature/blog/blogMarkdown/blogMarkdown'
import { Box } from '@/components/ui/atoms/box/box'
import { Timeline } from '@/components/feature/timeline/timelineListItem/type'
import { NEWT_SPACE_ID, NEWT_API_TOKEN } from '@/const/auth/newt'

export default function Home({ timeline }: { timeline: Timeline }) {
  const { isLoading, setLoading } = useLoading()
  const articleText = useMemo(() => {
    return !!timeline.blog
      ? timeline.blog.body
          .replace(/<p>/g, '')
          .replace(/<br>/g, '')
          .replace(/<\/p>/g, '\n')
          .replace(/&nbsp;/g, '  ')
          .replace(/&gt;/g, '>')
      : ''
  }, [timeline])

  useEffect(() => {
    setTimeout(() => setLoading(timeline === undefined), 500)
  }, [setLoading, timeline])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      <Box margin={'68px 0 0 0'}>
        <PageTitle title={timeline.title} size={'600'} />
      </Box>
      <ArticleInfo />
      {timeline.blog && <BlogMarkdown content={articleText} />}
    </motion.div>
  )
}

export const getStaticPaths = async () => {
  const { createClient } = require('newt-client-js')
  const client = createClient({
    spaceUid: NEWT_SPACE_ID,
    token: NEWT_API_TOKEN,
    apiType: 'cdn',
  })
  const timelines = await client.getContents({
    appUid: 'timeline',
    modelUid: 'timeline',
  })

  const paths = (timelines.items as Timeline[])
    .filter((t) => t.type === 'blog')
    .map((t) => `/blog/${t.slug}`)

  return { paths, fallback: false }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  if (!params) {
    return
  }

  const { slug } = params
  const { createClient } = require('newt-client-js')
  const client = createClient({
    spaceUid: NEWT_SPACE_ID,
    token: NEWT_API_TOKEN,
    apiType: 'cdn',
  })
  const timeline = await client.getFirstContent({
    appUid: 'timeline',
    modelUid: 'timeline',
    query: {
      slug,
    },
  })

  return { props: { timeline }, revalidate: 60 }
}
