import styled from "styled-components";


export const Container = styled.span`

   border-radius:10px;

   font-weight: 400;
font-size: 12px;
line-height: 14px;

   padding: 8px 16px;
   margin-right:8px;

   color:${({ theme }) => theme.COLORS.WHITE};
   background-color:${({ theme }) => theme.COLORS.TAG_BG};
 
`