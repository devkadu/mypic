import styled from "styled-components";

export const GaleryPic = styled.div`
    width: 70%;
    height: 30%;
    display: grid;
    position: absolute;
    margin-left: 25%;
    margin-top: 12%;
    
    
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

   img{
       width: 98%;
       height: 90%;
       border-radius: 5px;
       object-fit: cover;
   }
   img:hover{
      transform: scale(1.1);
   }

   

`;

