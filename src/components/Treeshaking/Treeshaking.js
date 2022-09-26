import './Treeshaking.css'
import folder from './images/folder.png'
import jsfile from './images/jsfile.png'
import css from './images/css.png'
import folder2 from './images/folder2.png'
import advantages from './images/advantages.png'
export default function (){
    return(
        <div className={"Treeshaking"}>
            <div className={"Left"}>
            <h2>1.Контроль зависимопстей</h2>
            <p> Контроль зависимостей(англ. Tree Shaking) - это термин, используемый при разнесении данных проекта на
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
                    <img src={jsfile}/>
                </div>
                <div className={"css"}>
                    <p>Чтобы импортировать стили и изображения, мы используем команду import.</p>
                    <img src={css}/>
                </div>
                <div className={"export"}>
                    <p>Но чтобы этот кусок функционировал, нужно экспортировать эту функцию через export default,
                    а затем этот компонент <br/>должен прилетать в родительский компонент. В данном случае родительским
                    компонентом является файл Advantages</p>
                    <img src={folder2}/>
                    <br/>
                    <img src={advantages}/>
                </div>
            </div>
        </div>
    )
}


