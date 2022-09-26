import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <div>
            Данной страницы не существует. Вернуться на <Link to="/SpaMP">Главную</Link>
        </div>
    )
}