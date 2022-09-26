import { Link } from 'react-router-dom'
import React from 'react';
export default function NotFound(){
    return(
        <div>
            Данной страницы не существует. Вернуться на <Link to="/SpaMP">Главную</Link>
        </div>
    )
}