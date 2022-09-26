import axios from "axios"
import Stripe from "stripe"
import { useState } from "react"
import Image from "next/future/image"
import { GetStaticPaths, GetStaticProps} from  'next'

import { useRouter } from "next/router"
import { stripe } from "../../libs/stripe"
import { LoadCard } from "../../components/loadCard"
import { 
    PurchaseButton,
    ImageContainer,
    ProductContainer,
    ProductDescription,
} from "../../styles/pages/product"


interface ProductProps {
    id: string,
    description: string,
    name: string,
    imageUrl: string,
    price: number,
    defaultPriceId: string,
}
  
interface ProductProps {
    product: ProductProps,
}

export default function Product({product}: ProductProps){
    const {isFallback} = useRouter()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    if(isFallback){
        return <LoadCard/>
    }

    async function handlePurchaseNewProduct(){
        try {
            setIsCreatingCheckoutSession(true)
            const url = '/api/checkout'
            const response = await axios.post(url,{priceId: product.defaultPriceId})
            const checkOutUrl: string = response.data.checkoutUrl
            
            location.href = checkOutUrl
        } catch (error) {
            alert('não foi possível te redirecionar  a rota de compra')        
            setIsCreatingCheckoutSession(false)
        }
    }
  
    return (
        
        <ProductContainer>
            <ImageContainer>
                <Image  src={product.imageUrl}height={480} width={480} alt=''/>
            </ImageContainer>

            <ProductDescription>
                <h1>{product.name}</h1>
                <strong>{product.price}</strong>
                <p>{product.description}</p>

                <PurchaseButton 
                    disabled = {isCreatingCheckoutSession}
                    onClick={handlePurchaseNewProduct}>
                        Comprar agora
                </PurchaseButton>
            </ProductDescription>
        </ProductContainer>

          
    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: 'prod_MTZodVpYIf9WkV'}},
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any,{id:string}> = async ({params})  => {
    const productId = params.id
   
    
    const productStripe = await stripe.products.retrieve(productId,{
        expand: ['default_price']
    })

    const  PriceFormater  = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })

    const price = productStripe.default_price as Stripe.Price
     
    const product  = {
        id: productStripe.id,
        description: productStripe.description,
        name: productStripe.name,
        imageUrl: productStripe.images[0],
        price:  PriceFormater.format(price.unit_amount / 100),
        defaultPriceId: price.id
        
    }

    return{
        props:{
            product: product,
        },
        //revalidate: 60 * 60 * 1 // 1hours
    }
}