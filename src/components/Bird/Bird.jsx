import bird from "../../images/bird.jpg"
import "../Spa/Spa.css"
import React from 'react';
import "./Bird.css"
export default function Bird(){
    return(
        <img src={bird} width={400} height={225} className={"Spa-right Animal-img"}/>
    )
}