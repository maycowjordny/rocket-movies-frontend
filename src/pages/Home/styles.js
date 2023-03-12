import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 100px auto;
grid-template-areas: 
"header"
"content"
;

.box{
    padding: 0 123px;
    height: 390px;

    grid-area: "content";
    
    overflow-y: auto;
    padding: 0 10px;
    

    ::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-track {
    margin: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};    
}

::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.COLORS.PINK_900} ;   
  border-radius: 20px;      
}
}



main{
   padding: 0 123px;
}



.title-button{
    padding: 0 123px 0 135px;
    display: flex;
    justify-content: space-between;
    margin-top:47.38px ;
    align-items: center; 
    margin-bottom: 37.45px;

    >h1{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: 'Roboto Slab';
        font-size: 32px;
        line-height: 42px;
        font-style: normal;
        font-weight: 400;
    }
}

.title-button button{ 
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 8px;
    height: 48px;

    width: 207px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    >svg{
      color: black;
      width: 20px;
    height: 20px;
    }
}
`

