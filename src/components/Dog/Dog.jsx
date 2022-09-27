import dog from '../../images/dog.jpg'
import React from 'react';
import './Dog.css'
export default function Dog(){
    return(
        <img src={dog} width={400} height={225} className={"Spa-right Animal-img"}/>
    )
}