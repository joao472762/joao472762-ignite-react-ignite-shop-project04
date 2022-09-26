import Image from "next/future/image"

import { Footer, HomeContainer, Product } from "../styles/pages/home"


import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import { stripe } from "../libs/stripe"
import { GetServerSideProps, GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"


interface ProductsProps {
  id: string,
  description: string,
  name: string,
  imageUrl: string,
  price: string
}

interface HomeProps {
  products: ProductsProps[]
}


export default function Home({products} : HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 2.1,
      spacing: 32,
      
    }
  })

  

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products.map(product => (
          <Link prefetch={false} key={product.id} href={`/product/${product.id}`}>
            <Product   className="keen-slider__slide">
              <Image src={product.imageUrl} alt='' width={520} height={420}/>
              <Footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </Footer>
            </Product>
          </Link>
          
        ))
      }  
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const  PriceFormater  = new Intl.NumberFormat('pt-br',{
      style: 'currency',
      currency: 'BRL'
    })

    const price = product.default_price as Stripe.Price

    return{
      id: product.id,
      description: product.description,
      name: product.name,
      imageUrl: product.images[0],
      price:  PriceFormater.format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: (60 * 60) * 2 //2 hours
  }

  
}