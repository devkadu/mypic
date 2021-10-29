import styled from "styled-components";

export const GaleryPic = styled.div`
    width: 75%;
    height: 30%;
    display: grid;
    position: absolute;
    margin-left: 25%;
    margin-top: 12%;
    
    
    
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

   img{
       width: 98%;
       height: 80%;
       border-radius: 5px;
       object-fit: cover;
   }

   

`;

