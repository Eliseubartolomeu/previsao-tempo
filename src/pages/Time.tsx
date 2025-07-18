import { useState } from 'react';
import { Search } from '../components/TimeComp/Search';
import { MainBox } from '../components/TimeComp/MainBox';
import { DaysWeather } from '../components/TimeComp/DaysWeather';
import { SunTimeBox } from '../components/TimeComp/SunTimeBox';
import { WindBox } from '../components/TimeComp/WindBox';
import { useWeather } from '../hooks/useWeather';
import { useForecast } from '../hooks/useForecast';
import { useAirPollution } from '../hooks/useAirPollution';

export function Time() {
  const [city, setCity] = useState('');

  const { data: weather, isLoading: loadingWeather } = useWeather(city);
  const { data: forecast } = useForecast(city);
  const { data: airData } = useAirPollution(
    weather?.coord.lat ?? 0,
    weather?.coord.lon ?? 0
  );

  return (
    <div className="app-body">
      <div className="container container-custom">
        <Search onSearch={setCity} />

        {loadingWeather ? (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <div className="layout">
            {weather && <MainBox weather={weather} />}

            <div className="right-column">
              <div className="row g-3">
                {airData && <WindBox airData={airData} />}
                {weather && (
                  <SunTimeBox
                    sunrise={weather.sys.sunrise}
                    sunset={weather.sys.sunset}
                  />
                )}
                {forecast && <DaysWeather data={forecast} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
