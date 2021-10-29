import React, { useState } from 'react'
import api from '../../api/api.config';
import Sidebar from '../Sidebar';


export default function UploadPicture() {
    const [image, setImage] = useState('');

   

    const uploadImage = async e => {
        e.preventDefault()
        console.log("upload Image")

        const newdata = new FormData();
        newdata.append('photos', image)

        const headers = {
            'headers': {
                'Content-Type': 'aplication/json'

            }
        }

        await api.post('/picture', newdata, headers).then((Response) =>{
            console.log(Response);
        }).catch((err) => {
            if(err.Response){
                console.log(err.Response);

            } else {
            console.log('tente mais tarde')
        }
        })

    }



    return (
        <div>
            
               <h1>uploadProfilePic</h1>
            <form onSubmit={uploadImage}>
                <label>image</label>
                <input type='file' name='image' onChange={e => setImage(e.target.files[0])} />
                <button type='submit'>Save</button>
            </form>
            
        </div>
    )
}
