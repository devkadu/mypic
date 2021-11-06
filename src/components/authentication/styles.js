import styled from "styled-components";

export const FullPage = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #2E3D80;
   display: flex;
   justify-content: space-between;
   align-items: center;
   
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    color: white;
    width: 90vh;
    margin: 1px 1px 0px 50px;
    
    h1{
        margin-bottom: 50px;
    }
    h3{
        font-size: 10vh;
        font-weight: 700;
        line-height: 11vh;
        padding-top: 55px;
    }
    p{
        font-size: 4vh;
        padding-top: 25px;
        font-weight: 200;
      
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    
    background-color: white;
    width: 35vw;
    height: 90vh;
    align-content: center;
    color: black;
    border-radius: 20px;
    h2{
        margin-bottom: 10%;
    }
    
    input{
        width: 90%;
        margin: 4%;
       
       
        border-radius: 7px;
        border: 1px solid grey;
        outline: 0px;
        height: 6%;
    }
    input[type="text"]::placeholder{
      padding-left: 20px;
    }
    button{
        margin-top: 15px;
        border-radius: 7px;
        height: 25px;
        width: 90%;
        border: 0;
        background-color: #91B2E4;
        height: 6%;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;