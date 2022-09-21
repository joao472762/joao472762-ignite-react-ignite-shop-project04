import { globalCss } from ".";

export const globalStyles = globalCss({
    '*':{
        margin: 0,
        border: 'none',
        padding: 0,
    },

    body: {
        '-web-kit-font-smothing': 'antialised',
        backgroundColor: '$gray900',
        color: '$gray100'
    },

    'body, input, textarea, button':{
        fontSize: '1rem',
        fontWeight: '400',
        fontFamily: 'Roboto,serif',
    }


})