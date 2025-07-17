export function DaysWeather() {
    return(
        <div className="col-12">
            <div className="card">
              <div className="d-flex justify-content-around flex-wrap">
                <div className="forecast-day">
                  <div>Amanhã</div>
                  <img src="cloud.png" alt="nublado"/>
                  <div>21° 16°</div>
                </div>
                <div className="forecast-day">
                  <div>Sexta-Feira</div>
                  <img src="sun.png" alt="sol"/>
                  <div>28° 20°</div>
                </div>
                <div className="forecast-day">
                  <div>Sábado</div>
                  <img src="rain.png" alt="chuva"/>
                  <div>25° 21°</div>
                </div>
                <div className="forecast-day">
                  <div>Domingo</div>
                  <img src="storm.png" alt="trovoada"/>
                  <div>20° 14°</div>
                </div>
                <div className="forecast-day">
                  <div>Segunda-Feira</div>
                  <img src="partly-cloudy-day.png" alt="nublado com sol"/>
                  <div>24° 18°</div>
                </div>
              </div>
            </div>
          </div>
    )
}