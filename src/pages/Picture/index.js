import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SinglePic from '../../components/SinglePic'
import { Full } from '../home/styles'

export default function Picture() {
    return (
        <Full>
        <Sidebar/>
        <Header/>
        <SinglePic/>
        </Full>


    )
}
