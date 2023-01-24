import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Background } from '@/components/layout/background'
import { Container } from '@/components/layout/container'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Background>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Background>
    </RecoilRoot>
  )
}
