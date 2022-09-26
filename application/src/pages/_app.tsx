import { AppProps } from "next/app"
import Image from 'next/future/image'
import Link from "next/link"

import logoImg from '../assets/igniteShopLogo.svg'

import { globalStyles } from "../styles/global"
import { Container, Header} from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link  prefetch={false} href="/">
          <a>
             <Image src={logoImg}  alt=''/>
          </a>
        </Link>
      </Header>
      <Component  {...pageProps} />
    </Container>
  )
}

