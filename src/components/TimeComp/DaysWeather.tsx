interface DaysWeatherProps {
  data: any[];
}

export function DaysWeather({ data }: DaysWeatherProps) {
  return (
    <div className="col-12">
      <div className="app-card d-flex justify-content-around flex-wrap">
        {data.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = date.toLocaleDateString("pt", {
            weekday: "long",
            day: "2-digit",
          });

          return (
            <div key={index} className="forecast-day text-center">
              <div>{dayName}</div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <div>
                {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
