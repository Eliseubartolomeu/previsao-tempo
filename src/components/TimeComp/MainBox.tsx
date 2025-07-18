interface MainBoxProps {
  weather: any;
}

export function MainBox({ weather }: MainBoxProps) {
  return (
    <div className="left-column">
        <div className="card-temperature">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="nuvem" className="cloud-icon"/>
          <div className="location"><i className="bi bi-geo-alt-fill"></i> {weather.name}</div>
          <div className="temperature-main">{Math.round(weather.main.temp)}°C</div>
          <div className="temperature-range"><strong>{Math.round(weather.main.temp_max)}<sup>°C</sup> </strong>{Math.round(weather.main.temp_min)}<sup>°C</sup></div>
          <div className="info-boxes">
            <div className="info-card">
              <i className="bi bi-speedometer2"></i>
              <div>Pressão<br/>{weather.main.pressure} hPa</div>
            </div>
            <div className="info-card">
              <i className="bi bi-droplet"></i>
              <div>Umidade<br/>{weather.main.humidity}%</div>
            </div>
            <div className="info-card">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
      alt={weather.weather[0].description} />
              <div>{weather.weather[0].description}</div>
            </div>
          </div>
          <div className="clouds"></div>
        </div>
      </div>
  );
}
