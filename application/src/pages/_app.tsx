import { AppProps } from "next/app"
import Image from 'next/future/image'

import logoImg from '../assets/igniteShopLogo.svg'

import { globalStyles } from "../styles/global"
import { Container, Header} from "../styles/pages/app"

globalStyles()
const css = { maxWidth: '100%', height: 'auto' }
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg}  alt=''/>
      </Header>
      <Component  {...pageProps} />
    </Container>
  )
}

