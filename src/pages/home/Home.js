import React from 'react';
import { Full } from "./styles";
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Galery from '../../components/Galery';


export default function Home() {
    return (
        <Full>
        <Sidebar/>
        <Header/>
        <Galery/>
        </Full>
    )
}




