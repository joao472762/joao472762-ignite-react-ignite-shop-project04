import { styled } from "..";

export const ProductContainer = styled('main',{
    display: 'grid',
    gridTemplateColumns:  '1fr 1fr',
    columnGap: '4.5rem',

    maxWidth: 1180,
    width: '100%',
    margin: '0 auto'
})

export const ImageContainer = styled('section',{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    padding: 26,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: 567,
})


export const ProductDescription = styled('aside',{
    display: 'flex',
    flexDirection: 'column',

    h1:{
        color: '$gray300',
        fontSize: '$2xl'
    },

    strong: {
        marginTop: '1rem',
        display: 'block',
        color: '$green300',
        fontSize: '$2xl',
        fontWeight: 'normal'
        
    },

    p:{
        marginTop: '2.5rem',

        color: '$gray300',
        fontSize: '$md',
        lineHeight: 1.6
        

    }

})

export const  PurchaseButton = styled('button',{
    marginTop: 'auto',

    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',

   
    backgroundColor: '$green500',
    height: 68,
    cursor: 'pointer',
    width: '100%',  
    color: '$white',
    fontSize: '$lg',
    fontWeight: 'bold',
    borderRadius: 8,
    transitionDuration: '.2s',

    '&:hover':{
        backgroundColor: '$green300'
    }
})

