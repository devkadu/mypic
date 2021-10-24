import React from 'react';
import { Link } from 'react-router-dom';
import {FullPage, TextArea, Form } from './styles'


const AuthForm = ({values, handleSubmit, handleChange, buttonlabel, loginmassage, signupmessage, linkmassage, type, error}) => {
    return (  
        <>
         <FullPage>
             <TextArea>
                <h1>myPic</h1>
                <h3>Guarde aquilo que é importante para você...</h3>
                 <p>suas fotos seguras e disponiveis em vários dispositivos sempre quando você precisar</p>

             </TextArea>
             
            <Form onSubmit ={handleSubmit}>
                <h2>{loginmassage} or <Link to={signupmessage}> {linkmassage}</Link></h2>
                
               
                <input type="text" name="username" placeholder='Username' value={values.username} onChange={handleChange}/>

                <input type="text" name ="password" placeholder='Password' value={values.password} onChange={handleChange}/>
            <button>{buttonlabel}</button>
            </Form>
        </FullPage>

        </>
    );
}
 
export default AuthForm;