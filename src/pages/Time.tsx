import { DaysWeather } from "../components/TimeComp/DaysWeather"
import { MainBox } from "../components/TimeComp/MainBox"
import { SunTimeBox } from "../components/TimeComp/SunTimeBox"
import { WindBox } from "../components/TimeComp/WindBox"

export function Time() {
    return(
        <main>
        {/* <Header/> */}
            <div className='app-main container'>
                <section id="inicio" className="home-title section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-center content">
                            <MainBox/>

                            <div className="col-lg-6">
                                <div className="row align-items-center content">
                                    <WindBox/>
                                    <SunTimeBox/>
                                </div>
                                <DaysWeather/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        {/* <Footer/>     */}
        </main>
    )
}