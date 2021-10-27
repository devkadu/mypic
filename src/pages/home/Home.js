import React, { useState, useEffect } from "react";
import api from "../../api/api.config"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Full} from "./styles";




const Home = () => {
    const userId = localStorage.getItem('user')
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Sidebar/> 
            <Header/>
        </Full>
    );
};

export default Home;