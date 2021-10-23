import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/api.config';
import AuthForm from '../../components/AuthForm';



const INITIAL_FORM = {
    username: "",
    password: ""
}


const Signup = () =>{

    
    const [ formValues, setFormValues ] = useState({...INITIAL_FORM})

    const history =useHistory()

    const handleChange = ({target: {name, value}}) => {
        setFormValues({...formValues, [name]: value })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
           await api.post('/auth/signup', formValues)
           history.push('/login')
        } catch (error) {
            console.error(error)
            
        }

    }


    return(
       <div>
           <AuthForm values= { formValues } handleSubmit={handleSubmit} handleChange={handleChange} buttonlabel='signup'/>
       </div>

    )

}

export default Signup;



