import styled from "styled-components";

export const Container = styled.div`

width:100%;
display: flex;
align-items: center;

background-color:  ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
border-radius: 10px;

>input{
  font-family: 'Roboto Slab';
    width:100%;
    font-size: 14px;
    color:  ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
  }

  svg{
    margin-left:16px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }


  ::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY};
    
  }

`