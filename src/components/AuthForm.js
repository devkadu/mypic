import React from 'react';
import { Container, Form } from '../pages/Signup/Styles';

const AuthForm = ({values, handleSubmit, handleChange, buttonlabel, type, error}) => {
    return (  
        <>
         <Container>
             
            <Form onSubmit ={handleSubmit}>
                <h1>myPic</h1>
                <label>Username:</label>
                <input type="text" name="username" value={values.username} onChange={handleChange}/>

                <label>Password:</label>
                <input type="text" name ="password" value={values.password} onChange={handleChange}/>
            <button>{buttonlabel}</button>
            </Form>
        </Container>

        </>
    );
}
 
export default AuthForm;