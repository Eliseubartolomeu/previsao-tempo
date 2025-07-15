import Header from "../components/Header/Header";

export function Welcome() {
    return(
        <main>
            <Header/>
            <div className='app-main container'>
                <section id="inicio" className="home-title section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row ">
                            <div className="col-lg-6">
                                <h2 className="text-center">Acompanhe a variação do tempo conosco</h2>
                                <div>
                                    <p className="text mb-4">O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo
                                    O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo.

                                    O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo

                                    O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo

                                    O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo

                                    O ElisTime é um sistema que ajuda Você a saber sobre como está o clima em qualquer cidade do mundo
                                    </p>
                                </div>
                            </div> 
                            <div className="col-lg-6">
                                <div className="shape-area">
                                    <div className="shape-1"></div>
                                </div>
                                <div className="goto-timepage mt-4">
                                    <div className='btn-area'>

                                        <a href="#sobre" className="link-time-main"><span>Pesquisar cidade</span><i className="bi bi-arrow-right"></i></a>

                                        <a href="#sobre" className="link-time-secondary"><span>Pesquisar cidade</span><i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}