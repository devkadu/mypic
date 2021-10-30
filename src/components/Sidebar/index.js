import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Profile, Buttons, Logout } from './style';
import api from '../../api/api.config';
import {BiLogOut} from 'react-icons/bi'


 function Sidebar() {

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
               <Buttons>
               
               <Link to='/UploadPicture'>New Image</Link>
               <Link to='/UploadProfilepic'>Change Profile Pic</Link>
               </Buttons>
               <Logout>
               <BiLogOut/><Link to='/logout'>Log out</Link>
               </Logout>
            
           </NavBar>
           
           
      
    ) 
}


export default Sidebar;
