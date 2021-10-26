import styled from "styled-components";

export const Full = styled.div`
    background-color: #787CBC;
    height: 100vh;
    display: flex;

`;

export const Profile = styled.div`
    background-color: #2E3D80;
    height: 100vh;
    width: 20%;
    border-radius: 0px 30px 30px 0px;
    

    h1{
        color: white;
        padding: 16% 30%;
        font-size: 200%;
    }

    a{
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-top: 50vh;
    }

`;

export const HomeCard = styled.div`

       
        
        width: 100%;
        height: auto;

`;

export const Header = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10%;

      a{
        color: white;
        font-size: 150%;
        text-decoration: none;
        font-weight: bold;
    }
`;

export const HeaderProfile = styled.div`

    display: flex;
    margin-top: 80px;
    align-items: center;
    

p{
    color: white;
    font-size: 20px;
    font-weight: 300;
    padding-left: 2px;
}

img{
    display: block;
    width: 30%;
    clip-path: circle();
    margin-left: 18%;
    
    
   
  

}


`;


export const ProfilePic= styled.img`

  display: block;
  width: 50%;
  clip-path: circle();
  
  


`;