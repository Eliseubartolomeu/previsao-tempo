import { Link } from "react-router-dom";

export function Welcome() {
    return(
        <div className="app-body">
            <div className="welcome-container">
                <div className="emoji">⛅</div>
                <h1>Bem-vindo ao ElisTime</h1>
                <p>Descubra a previsão do tempo para qualquer cidade do mundo.<br/>Confira informações detalhadas de temperatura, vento, umidade e muito mais!</p>
                <Link to='/ver-tempo' className="btn-main">Começar</Link>
            </div>
        </div>
    )
}