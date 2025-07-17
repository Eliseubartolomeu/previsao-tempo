import { Link } from "react-router-dom";

export function Welcome() {
    return(
        <div className="welcome-container">
            <h1>Bem-vindo ao ElisTime</h1>
            <p>Descubra a previsão do tempo para qualquer cidade do mundo.<br/>Confira informações detalhadas de temperatura, vento, umidade e muito mais!</p>
            <Link to='/ver-tempo' className="btn btn-main">Começar</Link>
        </div>
    )
}