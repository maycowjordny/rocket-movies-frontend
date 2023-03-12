import styled from "styled-components";



export const Container = styled.header`
grid-area: header;
padding: 0 123px;
width: 100%;
height: 116px;



display: flex;
align-items: center;
gap: 64px;
justify-content: space-between;


background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


border-bottom-width:1px;
border-bottom-style: solid;
border-bottom-color:${({ theme }) => theme.COLORS.LINE} ;


>svg{
    position: absolute;
    margin-left: 10px;
}

>h2 {
    color: ${({ theme }) => theme.COLORS.PINK_900};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  
}



`;

export const Profile = styled.div`


display: flex;

align-items: center;
gap:9px;


   > img{
        border-radius: 50%;
        width: 64px;
        height: 64px;

    }

    

.logout{
    display: flex;
    flex-direction: column;
    width:125px ;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: end;
}

.logout strong{
    color: ${({ theme }) => theme.COLORS.WHITE};
}

.logout a{
    filter: none;
}
`;

