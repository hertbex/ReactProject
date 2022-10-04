import './Treeshaking.css'
import folder from './images/folder.png'
import jsfile from './images/jsfile.png'
import stylesheet from './Highlighter.module.css'
import css from './images/css.png'
import folder2 from './images/folder2.png'
import advantages from './images/advantages.png'
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function () {
    return (
        <div className={"Treeshaking"}>
            <div className={"Left"}>
                <h2>1.Контроль зависимопстей</h2>
                <p> Контроль зависимостей(англ. Tree Shaking) - это термин, используемый при разнесении данных проекта
                    на
                    компоненты, то есть на каждый кусок страницы есть свой
                    скрипт и таблица стилей. Рассмотрим на прямо на этом разделе.
                </p>
            </div>
            <div className={"Right"}>
                <div className={"Folder"}>
                    <p>Этот раздел хранится в папке src/components/Treeshaking.</p>
                    <img src={folder}/>
                </div>
                <div className={"File"}>
                    <p>в Treeshaking.js находится JS функция с хранящимся в ней куском HTML кода.</p>
                    <SyntaxHighlighter language="javascript" style={dark} className={stylesheet.Highlighter}  wrapLines={true}>
                        {`
<div className={"Left"}>
                <h2>1.Контроль зависимопстей</h2>
                <p> Контроль зависимостей(англ. Tree Shaking) - это термин, используемый при разнесении данных проекта
                    на
                    компоненты, то есть на каждый кусок страницы есть свой
                    скрипт и таблица стилей. Рассмотрим на прямо на этом разделе.
                </p>
            </div>
`}
                    </SyntaxHighlighter>
                </div>
                <div className={"css"}>
                    <p>Чтобы импортировать стили и изображения, мы используем команду import.</p>
                    <SyntaxHighlighter language="javascript" style={dark} className={stylesheet.Highlighter}  wrapLines={true}>
                        {`import './Treeshaking.css'
                        import folder from './images/folder.png'
                        import jsfile from './images/jsfile.png'
                        `}
                    </SyntaxHighlighter>
                </div>
                <div className={"export"}>
                    <p>Но чтобы этот кусок функционировал, нужно экспортировать эту функцию через export default,
                        а затем этот компонент <br/>должен прилетать в родительский компонент. В данном случае
                        родительским
                        компонентом является файл Advantages</p>
                    <img src={folder2}/>
                    <br/>
                    <SyntaxHighlighter language="javascript" style={dark} className={stylesheet.Highlighter}  wrapLines={true}>
                    {`                        import './Advantages.css'
                        import Treeshaking from "../Treeshaking/Treeshaking";
                        import Spa from "../Spa/Spa"
                        import React from 'react';
                        import Rendering from "../Rendering/Rendering";
                        export default function Advantages(){
                        return(
                        <div className={"Advantages"}>
                        <h1>В чем приемущества?</h1>
                        <Treeshaking/>
                        <Spa/>
                        <Rendering/>
                        </div>
                        )
                    `}
                    </SyntaxHighlighter>

                </div>
            </div>
        </div>
    )
}


