import styled from "styled-components";

export const SingleGallery = styled.div`

width: 65%;
height: 68%;
position: absolute;
margin: 8% 0% 0% 30%;
display: flex;

img{
    width: 50%;
       height: 115%;
       border-radius: 5px;
       object-fit: cover;
}

h5{
    color: white;
    font-size: 150%;
    font-weight: 400;
    padding-left: 3%;

}

p{
    color: white;
    border: 2px solid blueviolet;
    position: absolute;
    width: 47%;
    height: 20%;
    margin-top: 5%;
    margin-left: 53%;
}

input{
    display: flex;
    flex-direction: column;
    width: 47%;
    height: 20%;
    position: absolute;
    top: 38%;
    left: 53%;
}

button{
    width: 47%;
    height: 10%;
    position: absolute;
    top: 59%;
    left: 53%;

}

`;