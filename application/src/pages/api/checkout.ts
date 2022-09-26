import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../libs/stripe";

export default async function handler (req:NextApiRequest, res:NextApiResponse){
    const priceId = req.body.priceId
    
    if(req.method !== 'POST'){
        return res.status(405).json({
            error: 'Method not allowed'
        })
    }
    
    if(!priceId){
        return res.status(404).json({
            error: 'price not found'
        })
    }


    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`
    const checkOutSessinon = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode:'payment',
        line_items: [{
            price: priceId,
            quantity: 1
        }]
    })

    return res.status(201).json({
        checkoutUrl: checkOutSessinon.url
    })
}