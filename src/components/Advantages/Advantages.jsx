import './Advantages.css'
import Treeshaking from "../Treeshaking/Treeshaking";
import Spa from "../Spa/Spa"
import React from 'react';
export default function Advantages(){
    return(
        <div className={"Advantages"}>
            <h1>В чем приемущества?</h1>
            <Treeshaking/>
            <Spa/>
        </div>
    )
}