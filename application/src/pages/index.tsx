import Image from "next/future/image"

import { Footer, HomeContainer, Product } from "../styles/pages/home"

import shirtImage01 from "../assets/shirts/01.png"
import shirtImage02 from "../assets/shirts/02.png"
import shirtImage03 from "../assets/shirts/03.png"
import shirtImage04 from "../assets/shirts/04.png"


import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides:{
      perView: 3,
      spacing: 32,

    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product  className="keen-slider__slide">
        <Image src={shirtImage01}  width={520} height={480} alt='' />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>
      
      <Product  className="keen-slider__slide">
        <Image src={shirtImage02}  width={520} height={480} alt='' />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>

      <Product  className="keen-slider__slide">
        <Image src={shirtImage03}  width={520} height={480} alt='' />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>

      <Product  className="keen-slider__slide">
        <Image src={shirtImage04}  width={520} height={480} alt='' />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>

      
    </HomeContainer>
  )
}
