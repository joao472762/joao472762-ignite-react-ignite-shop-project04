import { styled } from ".."

export const  SuccessContainer = styled('main',{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    width: '100%',
    height: 656,

    h1:{
        marginTop: '5.5rem',
        color: '$gray100',
        fontSize: '$2xl'
    },

    p:{
        marginTop: '2rem',
        color: '$gray100',
        fontSize: '$xl',
        maxWidth: 590,
        textAlign: 'center',
        lineHeight: 1.4,
    },

    a:{
        display: 'block',
        marginTop: '5rem',
        color: '$green500',
        fontSize: '$lg',
        fontWeight: 'bold',
        textDecoration: 'none',

        '&:hover':{
            color: '$green300',
        }
    }
})

export const ImageContainer = styled('div',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '8rem',
    height: '9rem',

    borderRadius: 8,
    padding: '.25rem',

    marginTop: '4rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img:{
        objectFit: 'cover'
    }
})