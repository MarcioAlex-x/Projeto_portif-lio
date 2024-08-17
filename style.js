import { createGlobalStyle } from "styled-components";

export const cores={
    primaria:'red',
    secundaria: 'blue',
    padrao: 'black'
}

const EstiloGlobal = createGlobalStyle`
    *{
        font-family: sans-serif;
    }
`

export default EstiloGlobal
