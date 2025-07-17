import { DaysWeather } from "../components/TimeComp/DaysWeather"
import { MainBox } from "../components/TimeComp/MainBox"
import { Search } from "../components/TimeComp/Search"
import { SunTimeBox } from "../components/TimeComp/SunTimeBox"
import { WindBox } from "../components/TimeComp/WindBox"

export function Time() {
    return(
        <div className="container-custom">
            <Search/>

            <div className="layout">
                <MainBox/>
                <div className="right-column">
                    <div className="row g-3">
                        <WindBox/>
                        <SunTimeBox/>
                        <DaysWeather/>
                    </div>
                </div>
            </div>

        </div>
    )
}