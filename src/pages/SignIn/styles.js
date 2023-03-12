import styled from "styled-components";

import BackGroundImg from "../../assets/background.png"

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;


`

export const Form = styled.form`

padding: 0 134px;
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;



>h1{
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
   

    color:${({ theme }) => theme.COLORS.PINK_900};
}

p{
 font-style: normal;
font-weight: 400;
font-size: 14px;
margin-bottom:48px ;
color:${({ theme }) => theme.COLORS.WHITE};
}

h2{
    color:${({ theme }) => theme.COLORS.WHITE};
    margin-bottom:30px; 
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
}

.create {
    margin-top: 42px;
    background: none;
    align-self: center;
}

a{
    color:${({ theme }) => theme.COLORS.PINK_900};
}


svg{
    display:flex;
    align-items: center;
}


button{
    margin-top: 15px;
    width: 340px;
    height: 56px;
    
    color:${({ theme }) => theme.TXT_COLOR_BUTTON};
}

div{
    margin-bottom: 8px;
}


`



export const BackGround = styled.div`
flex: 1;


background: url(${BackGroundImg}) center center ;
background-size: cover;
filter: brightness(0.9);


`
