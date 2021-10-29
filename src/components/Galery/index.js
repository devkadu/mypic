import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../api/api.config';
import { GaleryPic } from './style'


function List({ user, fallback }) {
    if (!user || user.length === 0) {
      return fallback;
    } else {
      return user.pictures.map(item => {
        return <div key={item.id}><img src={item.url} alt={item.title}/></div>;
      });
    }
  }



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
           <List user={user} fallback={"Loading..."} />

           
          </GaleryPic>


        )
    }
