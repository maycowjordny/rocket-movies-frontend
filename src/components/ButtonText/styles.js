import styled from "styled-components";


export const Container = styled.button`

display: flex;
align-items: center;
align-self: center;
gap: 8px;

padding-top: 40px;

font-weight: 400;
font-size: 14px;




border: none;
background: none;
color: ${({ theme }) => theme.COLORS.PINK_900};

>svg{
    color: ${({ theme }) => theme.COLORS.PINK_900};
}

`