import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthForm from '../../components/authentication/AuthForm'
import api from "../../api/api.config"

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Signup = () => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const [error, setError] = useState('');
    const history = useHistory()

    const handleInputChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await api.post('/auth/signup', formValues)
            history.push('/login')
        } catch (error) {
            setError('Signup falhou')
        }
    }

    return (
        <div>
            <AuthForm handleChange={handleInputChange} handleSubmit={handleSubmit} type='Signup' text={'Já tem conta? Entre'} goiaba={'/login'}/>
            <p>Já tem conta? Entre <Link to='/login'> aqui</Link></p>
            {error && <span>{error}</span> }
            
        </div>
    );
};

export default Signup;
