import styled from "styled-components";


export const Container = styled.span`


padding:5px 0;

color:${({ theme }) => theme.COLORS.WHITE};

>svg{
        margin-left:8px ;
        font-size:20px;
          margin-right:2px;
          color:${({ theme }) => theme.COLORS.PINK_900};
        }


`