import React from 'react'
import { MdAddToPhotos, MdPhotoAlbum, MdLogout} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Menu, OpitionsArea, ProfileArea } from './style'


 function Sidebar({values, uploadImage, setImage, imagemPath, User}) {
    return (
        <Menu>
            <h1><Link to="/">myPic</Link></h1>
            <ProfileArea>
                <img src={imagemPath} alt=""/>
                <p>{User}</p>


            </ProfileArea>
            <OpitionsArea>

            <form onSubmit={uploadImage}>
            <MdAddToPhotos/>
            <label for="pictures"> new Picture</label>
            <input type='file' name='pictures' id='pictures' onChange={e => setImage(e.target.files[0])}/>
        
            </form>


            <h4><MdPhotoAlbum/> <Link to="/">newAlbum</Link></h4>
            <h4><MdLogout/> <Link to="/">logout</Link></h4>
            </OpitionsArea>

           
        </Menu>
    )
}

//FUNCIONALIDADES

//uploads pictures




export default Sidebar;