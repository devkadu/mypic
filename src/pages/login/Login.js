import React from "react";
import api from "../../api/api.config";
import AuthForm from '../../components/authentication/AuthForm';
import { useState } from "react";

const INITIAL_FORM = {
    username: "",
    password: ""
}

const Login = (props) => {
    const [ formValues, setFormValues ] = useState({...INITIAL_FORM})

    const handleChange = ({target: {name, value}}) => {
        setFormValues({...formValues, [name]: value })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const result = await api.post('auth/login', formValues);
            console.log(result)
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('user', result.data.user.id)
            props.history.push('/')

           
        } catch (error) {
            console.error(error);
            
        }

    }
    return(
        <div>
            <AuthForm values= { formValues } handleSubmit={handleSubmit} handleChange={handleChange} buttonlabel='Log in' loginmassage='Login' signupmessage='/signup' linkmassage="create on account"/>
        </div>

    );

}

export default Login;