import React from 'react'
import { BoxSearch } from './style';
import { BsSearch } from "react-icons/bs";

function SearchBox() {
    return (
        <BoxSearch>
            <input type="search" />
            <BsSearch/>

        </BoxSearch>
    )
}

export default SearchBox;


