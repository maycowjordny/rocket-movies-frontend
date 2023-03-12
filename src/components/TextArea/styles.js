import styled from "styled-components";



export const Container = styled.textarea`


height: 274px;
width: 100%;
border-radius: 10px;
border: none;
resize: none;
outline: none;

padding: 19px 16px;
font-size: 14px;
background-color:  ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
font-family: 'Roboto Slab';
color:  ${({ theme }) => theme.COLORS.WHITE};


`