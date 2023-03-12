import styled from "styled-components"

export const Container = styled.div`
width: 100%;

border: none;
cursor: default;
padding: 22px;

margin-bottom: 16px;

.title-rating{
  display: flex;
  align-items: baseline;
  gap:19px ;
  > h1{
     text-align: left;
     font-weight: 700;
     font-size: 32px;
     color:${({ theme }) => theme.COLORS.WHITE} 
  }
}


 >section{
    width: 100%;
    display: flex;
    margin: 40px 0 40px;

   }
   
       .name-date img{
       border-radius: 50%;
       width: 16px;
       height: 16px;
    
 }


 svg{
         color: ${({ theme }) => theme.COLORS.PINK_900};
    }

    .name-date{
    margin-top:24px ;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE} ;
    gap:8px ;


   svg:nth-child(3){
        margin-left: 8px;
   }
    }

 
p{
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    
}




`