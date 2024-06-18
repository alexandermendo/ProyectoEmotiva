import { useState, useEffect } from 'react';
import { fetchWeatherData, formatDateTime, startDateTimeInterval, convertKelvinToCelsius } from '../../../../../../../../common/utils';
import './fecha.css';

export const Fecha = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null); // Estado para almacenar los datos del clima

  useEffect(() => {
    const cleanupInterval = startDateTimeInterval(setCurrentDateTime);
    const fetchWeather = async () => { await fetchWeatherData(setWeatherData) }
    fetchWeather();
    return cleanupInterval;
  }, []);

  return (
    <div className='navdate'>
      {weatherData && weatherData.name && weatherData.sys && weatherData.main && (
        <p>
          {weatherData.name}, {weatherData.sys.country} - {formatDateTime(currentDateTime)} - {convertKelvinToCelsius(weatherData.main.temp).toFixed(2)}°C
        </p>
      )}
    </div>
  );
};