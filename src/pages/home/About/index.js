import React from 'react'
import { Link } from 'react-router-dom'
import {  AboutPage, FullPageAb, HeaderAb } from './style'
import { BsGithub } from 'react-icons/bs' 


export const About = () => {
    return (
        <FullPageAb>
       
        <HeaderAb>
        <Link to='/'>myPic</Link>
        </HeaderAb>

        
        <AboutPage>
        <h2>About</h2>
                <p>Projeto FullslStack desenvolvido como apresentação final do bootcamp Ironhack.<br></br><br></br>

                    Mypic é uma aplicação web similar ao Dropbox.Onde o usuário pode criar uma conta guardar, ver, deletar e favoritar suas fotos preferidas.<br></br><br></br>

                    O back-end foi desenvolvido com node.js,  express e Mongoose que faz a interface com o banco não relacional Mongodb.

                    Já o front-end utiliza o React.js e para a estilização o Styled Components.</p>
                    <h5><Link to='https://github.com/devkadu/mypic'><BsGithub/>Carlos Eduardo</Link></h5>

        </AboutPage>
        </FullPageAb>
       
       
    )
}
