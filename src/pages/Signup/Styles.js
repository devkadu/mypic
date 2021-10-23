import styled from "styled-components";

export const Container = styled.div`

   width: 100vw;
   height: 100vh;
   background-color: #2E3D80;
   display: flex;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 400px;
    margin: auto;
    align-content: center;
    color: white;
    
    input{
        border-radius: 7px;
        border: 0 none;
        outline: 0px;
        height: 25px;
    }

    button{
        margin-top: 15px;
        border-radius: 7px;
        height: 25px;
    }

`;

