import './Rendering.css'
import gif from '../../images/rendering.gif'
import root from '../../images/root.png'
import Clock from "../Clock/Clock";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import stylesheet from "../Treeshaking/Highlighter.module.css";

export default function Rendering() {
    return (
        <div className={"Rendering"}>
            <div className={"Left"}>
                <h2>3.Рендеринг</h2>
                <p>Самым главным преимущемством ялвяется рендеринг React-элементов. Это позволяет обрабатывать разные
                    React-элементы независимо друг от друга.
                    По умолчанию все React-приложение завернуто в ReactDOM-элемент с id "root" в файле index.js.
                    Элементы React иммутабельны.
                    После создания элемента нельзя изменить его потомков или атрибуты. Элемент похож на кадр в фильме:
                    он отражает состояние интерфейса в конкретный момент времени. React DOM сравнивает элемент и его
                    дочернее дерево с предыдущей версией
                    и вносит в DOM только минимально необходимые изменения.
                    Именно это позволяет обновлять только некоторые элементы, как было показано в прошлом разделе.</p>
            </div>
            <div className={"Right Rendering-right"}>
                <Clock/>
                <SyntaxHighlighter language="javascript" style={dark} className={stylesheet.Highlighter} wrapLines={true}>
                    {`import {useEffect, useState} from "react";
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
        <div className={"clock"}>
            {text}
        </div>
    );
    `}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
