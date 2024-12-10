import {Link} from "react-router-dom"
import "./Menu.css"
export default function Menu(){
    return(
        <>
        <div className="container">
        <nav className="menu-centralizado">
            <ul className="lista-centralizada">
                <li ><Link to="/">Home</Link></li>
                <li ><Link to="/Carros">Carros</Link></li>
                <li ><Link to="/Alugados">Alugados</Link></li>
                <li ><Link to="/Usuario">Usuário</Link></li>
            </ul>
        </nav>
        </div>

        </>
    )
}