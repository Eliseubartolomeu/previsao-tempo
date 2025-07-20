import { Link } from "react-router-dom";

export function Welcome() {
    return(
        <div className="app-body">
            <div className="welcome-container">
                <div className="emoji">⛅</div>
                <h1>Bem-vindo ao ElisTime</h1>
                <p>Explore a previsão do tempo de forma fácil e precisa, para qualquer cidade do mundo.
                Acesse dados atualizados sobre temperatura, vento, umidade e muito mais — tudo em um só lugar, pensado para você se planejar melhor, onde quer que esteja.</p>
                <Link to='/ver-tempo' className="btn-main">Começar</Link>
            </div>
        </div>
    )
}