import styled from "styled-components";

export const Full = styled.div`
    background-color: #787CBC;
    height: 100vh;

`;

export const PictureCard = styled.div`

        display: grid;
        grid-template-columns: repeat(4. 1fr);
        gap: 10px;
   
  

`;

export const Profile = styled.div`
    background-color: #2E3D80;
    height: 100vh;
    width: 20%;
    border-radius: 0px 30px 30px 0px;
    

    h1{
        color: white;
        padding: 10% 30%;
    }

`;

export const HeaderProfile = styled.div`

    display: flex;
    align-items: center;
    margin-top: 50px;
    

p{
    color: white;
    font-size: 20px;
    font-weight: 300;
    padding: 20px;
}

img{
    display: block;
    width: 20%;
    clip-path: circle();
    margin-left: 35px;
    
    
   
  

}


`;


export const ProfilePic= styled.img`

  display: block;
  width: 50%;
  clip-path: circle();
  
  


`;