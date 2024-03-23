import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';

const API_KEY = `8e6cdd43ad2ae3c2aa015d8e018b2fda`;

const App = () => {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      currentLocationInfo(lat, lon);
    });
  };

  const currentLocationInfo = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherBtn />
      </div>
    </div>
  );
};

export default App;
