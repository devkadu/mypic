import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config"
import SearchBox from "../../components/SearchBox";
import { ProfilePic, Full, Profile, HeaderProfile, PictureCard, HomeCard, Header } from "./styles";
import {BsBoxArrowLeft} from 'react-icons/bs';



const Home = () => {
    const userId = localStorage.getItem('user')
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const result = await api.get(`/user/${userId}`);
            setUser(result.data);
            console.log(result)
        } catch (error) {
            console.error(error.response);
        }
    };

    return (


        <Full>
           



        
           
         

            <Profile>
                <h1>myPic</h1>
                <HeaderProfile>
            <ProfilePic src={user.profilePicture} alt=""/>
            <p>{user.username}</p>
                </HeaderProfile>
                <Link to='/logout'><BsBoxArrowLeft/> Logout</Link>
            </Profile>

            <HomeCard>
                <Header>
                    <SearchBox/>
                    <Link to='/about'>About</Link>
                    </Header>
            </HomeCard>

            
                {user.pictures.map((picture) => 
                <p key={picture.id}>
                    {picture.title}
                    </p>
                )}
            

        </Full>
        
    );
};

export default Home;