import React from 'react';
import { Link } from 'react-router-dom';
import {FullPage, TextArea, Form } from './styles'


const AuthForm = ({ handleSubmit, handleChange, type, error, goiaba, text}) => {
    return (  
        <>
         <FullPage>
             <TextArea>
                <h1>myPic</h1>
                <h3>Guarde aquilo que é importante para você...</h3>
                 <p>suas fotos seguras e disponiveis em vários dispositivos sempre quando você precisar</p>

             </TextArea>

             
             
            <Form onSubmit ={handleSubmit}>  
                <p>{text}<Link to={goiaba}> aqui</Link></p>
                {error && <p>{error}</p> }              
               
                <input type="text" name="username" placeholder='Username' onChange={handleChange}/>
                <input type="text" name ="password" placeholder='Password' onChange={handleChange}/>
            <button type="submit">{type}</button>
            
            </Form>
        </FullPage>

        </>
    );
}
 
export default AuthForm;