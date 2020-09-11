import React from "react";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="card text-center m-3 pt-4">
        <h1 className="display-1">{props.city}</h1>
        <h5 className="py-4">
          <i className={`fas ${props.weatherIcon} display-3`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}
        {minmaxTemprature(props.temp_min, props.temp_max)}
        <h3 className="py-4">{props.description}</h3>
      </div>
    </div>
  );
};

function minmaxTemprature(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
