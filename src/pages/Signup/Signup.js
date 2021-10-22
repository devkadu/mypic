import React from 'react'
import Container from './Styles';

 function Signup() {
    return (
        <Container>
           
               <section>
                   <h1>MyPic</h1>
                   <h3>Guarde Aquilo <br></br>que é importante <br></br>para você...</h3>
                   <p>suas fotos seguras e disponiveis em varios<br></br> dispositivos sempre quando você precisar</p>
                   </section>
               <div>
                   <h4>Login</h4>
                   <form>
                   <input type='text' placeholder ='username'></input>
                   <input type='text' placeholder ='password'></input>
                   </form>

               </div>
            
        </Container>
     
    )
}

export default Signup;