import bird from "../../images/bird.jpg"
import "../Spa/Spa.css"
export default function Bird(){
    return(
        <img src={bird} width={400} height={225} className={"Right"}/>
    )
}