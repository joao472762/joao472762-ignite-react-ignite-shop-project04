import Stripe from "stripe";
import Head from "next/head";
import Link from "next/link";
import Image from "next/future/image";

import { stripe } from "../libs/stripe";
import { GetServerSideProps } from "next";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface Product {
    name: string,
    imageUrl: string,
}

interface SessionProps {
    customerName: string,
    product: Product
}

export default function Success({customerName,product}: SessionProps){
    
    
    return(
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex"/>
            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={110} alt='' />
                </ImageContainer>

                <p>
                    Uhuul <strong>{customerName}</strong>, 
                    sua <strong>{product.name}</strong> já está a caminho da sua casa. 
                </p>

                <Link href={'/'}>voltar ao catálogo</Link>

            </SuccessContainer>
        
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id){
        return{
            redirect:{
                destination: '/',
                permanent: false    
            }
        }
    }
    const sessionId = query.session_id as string
    
    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand:['line_items','line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const product = session.line_items.data[0].price.product as Stripe.Product


    return{
        props:{
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }

}