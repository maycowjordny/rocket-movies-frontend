import styled from "styled-components"



export const Container = styled.div`
text-align: left;

.title-rating h1{
color: ${({ theme }) => theme.COLORS.WHITE};
margin-bottom: 8px;
}

.title-rating span svg{
    font-size: 12px;
    margin-left: 6px;
}

p{

margin-top:15px ;    
color: ${({ theme }) => theme.COLORS.GRAY};
overflow: hidden; 
text-overflow: ellipsis; 
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical; 

}

footer{
    margin-top:20px ;
}

footer span{

    background-color:${({ theme }) => theme.COLORS.TXT_BUTTON_COLOR};
}

grid-area: content;

  margin-bottom:24px;
  width: 100%;
  height: 222.85px;
  padding: 32px;
  border: none;
  border-radius:16px;
  background-color: ${({ theme }) => theme.COLORS.PINK_ALPHA};

`