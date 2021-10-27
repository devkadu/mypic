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
            if(err.response){
                console.log(err.response);

            } else {
            console.log('tente mais tarde')
        }
        })

    }



    return (
        <div>
            <Sidebar values={ image } uploadImage={uploadImage} setImage={setImage}/>
        </div>
    )
}
