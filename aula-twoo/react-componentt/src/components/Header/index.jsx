import Incomoda from "../../assets/images/apple.png"
import "./styles.css"

export default function Header() {
    return (
        <header>
            <img src={Incomoda} 
            alt="Img Apple" />
            <nav>
{/*             
            <a href="">link 1</a>
            <a href="">link 2</a>
            <a href="">link 3</a>
            <a href="">link 4</a> */}
            <div className="button-wrapper">
                <button02 type="button">Sing up</button02>
                <button02 type="button">Sing out</button02>
            <input className="input" placeholder="Search"/>
            </div>


            </nav>
        </header>
    )
}