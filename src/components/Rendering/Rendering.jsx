import './Rendering.css'
import gif from '../../images/rendering.gif'
import root from '../../images/root.png'
import Clock from "../Clock/Clock";
export default function Rendering(){
    return(
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
            </div>
        </div>
    )
}
