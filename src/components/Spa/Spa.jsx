import './Spa.css'
import {Link, Route, Routes} from "react-router-dom";
import Dog from "../Dog/Dog";
import Cat from "../Cat/Cat";
import Bird from "../Bird/Bird";
import NotFound from "../NotFound/NotFound";
import SpaMP from "../SpaMP/SpaMP";
import React from "react";

export default function Spa(){
    return(
        <>
        <div className={"Spa"}>
            <div className={"Left"}>
                <h2>2.SPA и React Router</h2>
                <p>React славится своей возможностью написания одностраничных приложений (англ. SPA - single page application).
                    Идея состоит в том, что при посещении сайта, у пользователя сразу загружаются все HTML и JS файлы, и при обновлении содержимого не нужно полностью обновлять
                    сайт, замедляя его работу. Проверить наличие SPA можно часто нажимая ссылки и при если нет характерного моргания, означающего перезагрузку страницы, то перед
                    вами одностраничное приложение. <br/> <br/> SPA работает благодаря маршрутизации в React (он же React Router). Маршрутизация позволяет менять содержимое
                    компонента при нажатии на ссылку. Создается видимость перехода между страницами, так как в адресной строке меняется ссылка, но вместо отрисовки от начала до конца,
                    меняется нужный нам компонент. Это происходит быстрее обычных HTML-ссылок.
                </p>
            </div>
            <div className={"Right Spa-right-flex"}>
                <div className={"Link-menu Spa-right"}>
                    <Link to={'/SpaMP'}>Главная</Link>
                    <Link to={'/dog'}>Собака</Link>
                    <Link to={'/cat'}>Кот</Link>
                    <Link to={'/bird'}>Птичка</Link>
                </div>
                <Routes>
                    <Route path="/Spa" element={<Spa/>}/>
                    <Route path="/SpaMP" element={<SpaMP/>}/>
                    <Route path="/dog" element={<Dog/>}/>
                    <Route path="/cat" element={<Cat/>}/>
                    <Route path="/bird" element={<Bird/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>

        </>
    )
}
