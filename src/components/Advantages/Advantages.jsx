import './Advantages.css'
import Treeshaking from "../Treeshaking/Treeshaking";
import Spa from "../Spa/Spa"
import React from 'react';
import Rendering from "../Rendering/Rendering";
import Another from "../Another/Another";
export default function Advantages(){
    return(
        <div className={"Advantages"}>
            <h1>В чем приемущества?</h1>
            <Treeshaking/>
            <Spa/>
            <Rendering/>
            <Another/>
        </div>
    )
}