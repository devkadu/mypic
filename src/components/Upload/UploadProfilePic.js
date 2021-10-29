import React, { useState } from 'react'
import api from '../../api/api.config';
import { UploadPic } from './style';

export default function UploadProfilePic() {
    const [image, setImage] = useState('');

    const uploadImage = async e => {
        e.preventDefault()
        console.log("upload Image")

        const newdata = new FormData();
        newdata.append('avatar', image)

        const headers = {
            'headers': {
                'Content-Type': 'aplication/json'

            }
        }

        await api.post('/user/profilepic', newdata, headers).then((Response) =>{
            console.log(Response);
        }).catch((err) => {
            if(err.response){
                console.log(err.response);

            } else {
            console.log('tente mais tarde')
        }
        })

    }



    return (
       <UploadPic>
            <form onSubmit={uploadImage}>
                <label for="profileImage">Change Profile Pic</label>
                <input type='file' name='image' id='profileImage'onChange={e => setImage(e.target.files[0])}/>
                
            </form>
            
        </UploadPic>
    )
}
