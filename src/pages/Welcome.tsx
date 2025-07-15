export function Welcome() {
    return(
        <main>
            <div className='app-main container'>
                <section id="inicio" className="home-title section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="shape-area">
                            <div className="shape-1"></div>
                        </div>
                        <h2 className="text-center">Acompanhe a variação do tempo</h2>
                        <div className="goto-timepage mt-4">
                            <div className='btn-area'>

                                <a href="#sobre" className="link-time-main"><span>Segue-me</span><i className="bi bi-arrow-down"></i></a>

                                <a href="#sobre" className="link-time-secondary"><span>Segue-me</span><i className="bi bi-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}