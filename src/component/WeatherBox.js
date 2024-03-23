import React from 'react';

const WeatherBox = ({ weather }) => {
  const tempC = weather ? Math.round(weather.main.temp) : '';
  const tempF = weather ? Math.round(weather.main.temp * 1.8 + 32) : '';
  const tempMin = weather ? Math.round(weather.main.temp_min) : '';
  const tempMax = weather ? Math.round(weather.main.temp_max) : '';
  const weatherCondition = weather?.weather[0].description;

  return (
    <div>
      <div className="weather-box">
        <div className="city-name">{weather?.name}</div>
        <div>{weatherCondition}</div>
        <div>
          {tempC}ºC / {tempF}ºF
        </div>
        <div>
          최저기온 : {tempMin}ºC / 최고기온 : {tempMax}ºC
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
