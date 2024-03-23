import React from 'react';

const WeatherBtn = ({ cityArr, setCity, selectCity, getCurrentLocation }) => {
  return (
    <div>
      <button
        className={`btn ${selectCity === '' ? 'clicked' : 'unclicked'}`}
        onClick={() => getCurrentLocation()}
      >
        현재위치
      </button>

      {cityArr.map((city) => (
        <button
          className={`btn ${selectCity === city ? 'clicked' : 'unclicked'}`}
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherBtn;
