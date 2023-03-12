import styled from "styled-components";


export const Container = styled.div`


display: flex;
align-items: center;


background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

color: ${({ theme }) => theme.COLORS.GRAY};

border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};

margin-bottom:8px;
padding-right:16px;

border-radius:10px;



>button{
    border:none;
    background:none;
}

border-radius: 10px;

>input{
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto Slab';
    padding:16px;
    border:none;
    background: transparent;
    outline: none;
    width:100%;
    height: 56px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }




svg{
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK_700};
    width:20px;
    height:20px;
}

`