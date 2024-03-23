import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import ClipLoader from 'react-spinners/ClipLoader';

const API_KEY = `8e6cdd43ad2ae3c2aa015d8e018b2fda`;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [apiErr, setApiErr] = useState('');

  let cityArr = ['Bangkok', 'London', 'Vancouver'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      currentLocationInfo(lat, lon);
    });
  };

  const currentLocationInfo = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoadingSpinner(true);
      let response = await fetch(url);
      let data = await response.json();
      console.log('data', data);
      setWeather(data);
      setLoadingSpinner(false);
    } catch (err) {
      setApiErr(err.message);
      setLoadingSpinner(false);
    }
  };

  const getCityWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      setLoadingSpinner(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoadingSpinner(false);
    } catch (err) {
      setApiErr(err.message);
      setLoadingSpinner(false);
    }
  };

  useEffect(() => {
    city === '' ? getCurrentLocation() : getCityWeather();
  }, [city]);

  return (
    <div>
      {loadingSpinner ? (
        <div className="container">
          <ClipLoader
            loading={loadingSpinner}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      ) : !apiErr ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherBtn
            cityArr={cityArr}
            setCity={setCity}
            selectCity={city}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      ) : (
        <div className="container apiErr">{apiErr}</div>
      )}
    </div>
  );
};

export default App;
