import styled from "styled-components";

export const Menu = styled.div`
    background-color: #2E3D80;
    width: 18%;
    height: 100%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 200%;
        margin-top: -59%;
    }

    a{
        color: white;
        text-decoration: none;
        
    }

`;

export const ProfileArea = styled.div`
    width: 100%;
    height: 12%;
    margin-top: -75%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img{
        
        width: 22%;
        clip-path: circle();
        margin-right: 5%;
        
    }

    p{
        color: white;
    }

`;

export const OpitionsArea = styled.div`

   
    margin-top: -70%;

    h4{
        font-weight: 200;
        padding: 6px;
    }

    input[type='file']{
        display:none;
    }

    label{
        width: 20%;
        color: white;
        cursor: pointer;
        transition: .5s;
    }
    label :hover{
        
    }
    

`;


