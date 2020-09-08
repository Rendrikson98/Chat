import React from 'react';

import {BsDot, BsX} from 'react-icons/bs'

import './infoBar.css';

export default function Infobar({room}){
    return(
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <BsDot className='onlineIcon' />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/'><BsX id='closeImage' alt='close image'/></a>
            </div>
        </div>
    )
}