import cat from "../../images/cat.jpg"
import React from 'react';
import './Cat.css'
export default function Cat(){
    return(
        <img src={cat} width={400} height={225} className={"Spa-right Animal-img"}/>
    )
}