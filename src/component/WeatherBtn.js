import React from 'react';

const WeatherBtn = () => {
  let cityArr = ['Bangkok', 'London', 'Vancouver'];

  return (
    <div>
      <button className="btn">현재위치</button>

      {cityArr.map((city) => (
        <button className="btn">{city}</button>
      ))}
    </div>
  );
};

export default WeatherBtn;
