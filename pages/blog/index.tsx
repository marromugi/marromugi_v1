import { Flex } from '@/components/ui/atoms/box/flex'
import { Button } from '@/components/ui/atoms/button/button/button'
import { PageTitle } from '@/components/ui/molucules/common/pageTitle'
import { useLoading } from '@/hooks/loading/useLoading'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const { isLoading, setLoading } = useLoading()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      <Flex direction="column" justify={'center'} items={'center'}>
        <PageTitle title={'BLOG'}>
          <Button color={'primary'} onClick={() => {}}>
            カテゴリー
          </Button>
        </PageTitle>
      </Flex>
    </motion.div>
  )
}
