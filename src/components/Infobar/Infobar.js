import './Infobar.css'
import About from "../About/About";
import Analogs from "../Analogs/Analogs";
import Whyreact from "../Whyreact/Whyreact";
export default function Infobar(){
    return(
        <div className={"Infobar"}>
            <About/>
            <Analogs/>
            <Whyreact/>
        </div>
    )
}