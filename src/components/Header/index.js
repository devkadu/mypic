import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox'
import { Nav } from './style'

export default function Header() {
    return (
        <Nav>
            <SearchBox/>
            <Link to='/about'>About</Link>


        </Nav>
        
            
        
    )
}
