import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export function Welcome() {
    return(
        <main>
            <Header/>
            <div className='app-main container'>
                <section id="inicio" className="home-title section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-center">Bem vindo ao seu site de previsão do tempo</h1>
                    </div>
                </section>
            </div>
            <Footer/>    
        </main>
    )
}