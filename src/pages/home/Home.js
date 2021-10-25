import React, { useState, useEffect } from "react";
import api from "../../api/api.config"
import { ProfilePic, Full, Profile, HeaderProfile } from "./styles";


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
            </Profile>

        </Full>
        
    );
};

export default Home;