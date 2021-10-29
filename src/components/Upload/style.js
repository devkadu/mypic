import styled from "styled-components";

export const UploadPic = styled.div`
    input[type='file']{
        display: none;
    }

     label{
        padding: 8px 5px;
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
        border: 5px solid #2E3D80;
       
    }

   label:hover{
        background-color: white;
        color: #787CBC;

    }


`;