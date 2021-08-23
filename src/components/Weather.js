//Get the current weather for the selected city

import React, { useState, useEffect } from "react";

const Weather = (props) => {
    
      useEffect(()=>{
        const getWeather = () => {
            if (props.place) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=a7410da00e5141746d511f305afc33ee`)
                .then(function(response){
                return response.json();
                })
                .then(function(myWeather) {
                setWeather(myWeather)
                });
            }
        };
        getWeather()
      },[props])

      const [weather, setWeather] = useState([])

      if (weather.main) {
          return (
              <div className="weatherInfo">
                  <h2 className="weatherTitle">Current Weather</h2>
                  <p className="temp">{Math.round(weather.main.temp - 273.15) + '° C'}</p>
                  <p className="desc">{weather.weather[0].description}</p>
              </div>
          )
      } else {
          return (
            <div className="weatherInfo">
                <h2 className="weatherTitle">Current Weather</h2>
                <p className="temp"></p>
                <p className="desc"></p>
            </div>
          )
      }

}

export default Weather