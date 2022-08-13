import './Whyreact.css'
import Why from '../../images/why.png'

export default function Whyreact() {
    return (
        <div className={"Whyreact"}>
            <div className={"1st-div"}>
                <h2>Почему React?</h2>
                <p>React является одной из первых библиотек в своем роде и заслужила свою славу засчет простоты
                    использования, а также благодаря ряду библиотек, таких Redux.
                    <br/>К тому же, Angular разрабатывается исключительно на Typescript, которая сложнее обычного
                    Javascript-a.
                    <br/>Vue создан китайцами, поэтому англоязычной документации и сообщества гораздо меньше, чем на других
                    библиотеках
                    <br/>А Svelte еще довольно новый, поэтому не получил должного распространения.
                </p>
            </div>
            <div className={"2nd-div"}>
                <img src={Why}/>
            </div>
        </div>
    )
}