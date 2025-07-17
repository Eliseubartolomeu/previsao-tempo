 export function MainBox() {
    return(
      <div className="left-column">
        <div className="card-temperature">
          <img src="cloud.png" alt="nuvem" className="cloud-icon"/>
          <div className="location">Rio do Sul, SC</div>
          <div className="temperature-main">18°C</div>
          <div className="temperature-range">22° 16°</div>
          <div className="info-boxes">
            <div className="info-card">
              <img src="wind.png" alt="vento"/>
              <div>Vento<br/>17 km/h</div>
            </div>
            <div className="info-card">
              <img src="humidity.png" alt="umidade"/>
              <div>Umidade<br/>31%</div>
            </div>
            <div className="info-card">
              <img src="rain.png" alt="chuva"/>
              <div>Chuva<br/>10%</div>
            </div>
          </div>
          <div className="clouds"></div>
        </div>
      </div>
    )
}