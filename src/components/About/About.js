import './About.css';
import logo from '../../images/reactlogo.png'

export default function About() {
    return (
        <div className={"About"}>
            <div className={"1st-div"}>
                <h2 className={"head"}>О React-е</h2>
                <p>React — это одна из главных JavaScript-библиотек для разработки пользовательского интерфейса сайтов и
                    приложений,
                    <br/>являющаяся ведущей и крайне востребованной в мире IT.
                </p>
            </div>
            <div className={"2nd-div"}>
                <img src={logo}/>
            </div>
        </div>

)
}

