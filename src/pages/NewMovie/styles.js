import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;

grid-template-rows: 116px auto;

grid-template-areas: 
"header"
"content"
;



h1{
    margin-top:24px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.WHITE};
}

main{
   grid-area: "content";
   overflow-y: scroll;
}



textarea::-webkit-scrollbar {
  width: 8px;              
}

textarea::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};    
}

textarea::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.COLORS.PINK_900} ;   
  border-radius: 20px;      
}



main::-webkit-scrollbar {
  width: 8px;              
}

main::-webkit-scrollbar-track {
  margin: 32px;
  padding-right:100px ;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};    
}

main::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.COLORS.PINK_900} ;   
  border-radius: 20px;      
}






.tags{
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
border-radius: 10px;
padding: 16px;
display: flex;
flex-wrap: wrap;
gap: 8px;
}



`

export const Form = styled.form`

padding: 0 123px ;
padding-bottom: 101px;


.input-name-avaliation{
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
}

.form-button{
    display: flex;
    justify-content: center;
    gap: 40px;
    
}

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}



.form-button button{
    font-family: 'Roboto Slab';
     
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 50%;
    height: 56px;

    background: #FF859B;
    border-radius: 10px;

}



.form-button button:nth-child(1){
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
    color: ${({ theme }) => theme.COLORS.PINK_900} ;
}




`