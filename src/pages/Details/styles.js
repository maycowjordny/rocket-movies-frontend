import styled from "styled-components";


export const Container = styled.div`

main a{
  display: flex;
    justify-content: space-between;
    background: none;
}


main{
display: grid;
grid-template-rows: auto 0;
justify-content: center;
grid-template-areas: 
"header"
"content"
;

}

`

export const Section = styled.div`

overflow-y: auto;
height: 500px;

width: 1133px;

margin:  auto ;
padding: 3px 10px;

::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-track {
  margin: 22px 7px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};    
}

::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.COLORS.PINK_900} ;   
  border-radius: 20px;      
}

`