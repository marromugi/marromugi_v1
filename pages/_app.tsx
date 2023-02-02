import '../styles/globals.css'
import '../styles/markdown.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Background } from '@/components/ui/layout/background'
import { Container } from '@/components/ui/layout/container'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <Background>
        <Container>
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </Container>
      </Background>
    </RecoilRoot>
  )
}
