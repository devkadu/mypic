import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Profile } from './style';
import api from '../../api/api.config';


 function Sidebar(uploadImage, setImage) {

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
      
           <NavBar>


               <h1><Link to="/">myPic</Link></h1>
               <Profile>
                   <img src={user.profilePicture} alt=""/>
                   <p>{user.username}</p>
               </Profile>

               
            
           </NavBar>
           
           
      
    ) 
}


export default Sidebar;
