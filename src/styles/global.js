

import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

*{  
margin:0;
padding: 0;
box-sizing: border-box;

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-family: 'Roboto Slab', serif;
}
a{
    text-decoration:none;
    color: ${({ theme }) => theme.COLORS.LINKS};
}

button,a{

outline: none;
    cursor: pointer;
    transition: filter 0.2s;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
}

button:hover,a:hover{
    filter: brightness(0.9);
}

svg{
    color: ${({ theme }) => theme.COLORS.LINKS};
}


::placeholder{
    color: ${({ theme }) => theme.COLORS.LINKS};
}



}


`;