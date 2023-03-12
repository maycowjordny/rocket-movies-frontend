import styled from "styled-components";


export const Container = styled.button`

font-family: 'Roboto Slab';
font-style: normal;
font-weight: 500;
font-size: 16px;

height: 56px;
width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK_700};
border-radius: 10px;
border: none;

color: ${({ theme }) => theme.COLORS.TXT_BUTTON_COLOR};



`   