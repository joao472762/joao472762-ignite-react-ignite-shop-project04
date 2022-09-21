import { styled } from "..";

export  const HomeContainer  = styled('main',{
    display: "flex",
    
    minHeight: 656,
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) /2))',
    marginLeft: 'auto',

})

export const Product =  styled('a',{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    cursor: 'pointer',
    borderRadius: 8,
    overflow: "hidden", 
    
    img:{
        objectFit: 'cover'
    },

    '&:hover':{
        footer:{
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }

})

export const Footer = styled('footer',{
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    position: 'absolute',

    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',

    background: "$gray800",
    filter: 'opacity(.8)',

    height: 98,
    paddingRight: 40,
    paddingLeft: 32,
    borderRadius: 6,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all .2s ease-in-out',

    strong:{
        color: "White",
        fontSize: '$lg'
    },

    span: {
        fontWeight: 'bold',
        color: "$green300",
        fontSize: '$lg'
    }
})