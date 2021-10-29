import styled from "styled-components";

export const NavBar = styled.div`
    width: 25%;
    border-radius: 0px 30px 30px 0px;
    height: 100%;
    background-color: #2E3D80;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    


    a{
        text-decoration: none;
        color: white;
       
        
    }

    h1{
        margin-top: -125%;
        font-size: 200%;
    }

`;

export const Profile = styled.div`
    width: 100%;
    height: 15%;
    margin-top: -95%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img{
        width: 20%;
        clip-path: circle();
    }

    p{
        color: white;
        padding: 10px;
    }

`;