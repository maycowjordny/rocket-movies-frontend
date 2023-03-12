import styled from "styled-components";


export const Container = styled.div`
header{
    display: flex;
    align-items: center;
    padding: 0 124px 30px;
    
    height:144px ;
    
    background-color: ${({ theme }) => theme.COLORS.PINK_ALPHA};
 
}

header a{
    background: none;
}





`


export const Form = styled.form`

max-width:340px;
margin: 30px auto 0 ;
display: flex;
flex-direction: column;
gap: 8px;


div:nth-child(4){
    margin-top: 16px;
}

`


export const ProfileImg = styled.div`

position: relative;
margin: -124px  auto  0 ;

img{
    border-radius: 50%;
    width:186px;
    height:186px;
}


>label{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    
    position: absolute;
    bottom: 7px;
    right: 7px;

    display: flex;
    align-items: center;
    justify-content: center ;
    
    
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    
    input{
        display: none;
    }

    
    svg{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.TXT_BUTTON_COLOR};
    }
}

`