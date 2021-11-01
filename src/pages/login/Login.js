import React, { useState } from "react";
import AuthForm from "../../components/authentication/AuthForm";
import api from "../../api/api.config";

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Login = () => {

    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const [error, setError] = useState("");

    const handleInputChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/login", formValues);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.user.id)
            setError('')
            window.location = '/'
        } catch (error) {
            console.error(error.response)
            setError("Login falhou");
        }
    };

    return (
        <div>
            <AuthForm
                handleChange={handleInputChange}
                handleSubmit={handleSubmit}
                type="Login"
                text='Ainda não tem uma conta? Cadastre-se'
                goiaba='/signup'
            />
            {error && (
                <span
                >
                    {error}
                </span>
            )}
            
        </div>
    );
};

export default Login;