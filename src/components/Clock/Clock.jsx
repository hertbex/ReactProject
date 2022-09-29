import {useEffect, useState} from "react";

export default function Clock(){
    const [text,setText]=useState('')
    const [timer,setTimer]=useState(null)
    useEffect(()=>{
        setTimer(setInterval(()=>setText(new Date().toLocaleTimeString()),1000))
        return ()=>{
            clearInterval(timer)
            setTimer(null)
        }
    },[])
    return (
        <div>
            {text}
        </div>
    );
}

