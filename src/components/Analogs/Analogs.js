import './Analogs.css'
import Angular from '../../images/angularlogo.png'
import Vue from '../../images/vuelogo.png'
import Svelte from '../../images/sveltelogo.png'
export default function Analogs(){
    return(
        <div className={"Analogs"}>
            <div className={"1st-div"}>
                <h2>Об аналогах</h2>
                <p>Помимо React существуют другие библиотеки, той же направленности.<br/>
                    Angular, Vue, Svelte и многие другие, имеющие свои особенности и методы разработки.
                </p>
            </div>
            <div className={"2nd-div"}>
                <img src={Angular}/>
                <img src={Vue}/>
                <img src={Svelte}/>
            </div>
        </div>

    )
}