import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../api/api.config';
import { GaleryPic } from './style'

export default function Galery() {


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


        return(
          <GaleryPic>
                {user.pictures.map((pictures) => (
                 <><Link to={`/pictures/${pictures._id}`} /><img src={pictures.url} alt={pictures.title} /></> 

             ))}

           
          </GaleryPic>


        )
    }