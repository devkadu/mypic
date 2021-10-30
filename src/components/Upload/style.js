import styled from "styled-components";

export const UploadPic = styled.div`
    
    height: 70%;
    position: absolute;
    margin-top: 10%;
    margin-left: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    input[type='file']{
        display: flex;
        justify-content: center;


        
    }
    button{
        width: 90%;
        background-color: #2E3D80;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        
        align-items: center;

    }

     label{
       /*  padding: 8px 5px;
        border-radius: 8px;
        width: 100%;
        background-color: #787CBC;
        color: white;
        display: block;
        text-align: center;
        cursor: pointer;
        transition: .5s;
        font-size: 75%;
        margin: auto;
        border: 5px solid #2E3D80; */
        display: none;
    }

   label:hover{
        background-color: white;
        color: #787CBC;

    }


`;