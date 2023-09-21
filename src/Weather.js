import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function displayWeather(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon 
        });
    }

    function search() {
        let units = "metric";
        let apiKey = "0d55405ea37f9b16a55f03b2fb1326a2";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(displayWeather);
    }

    function handleSearch(event) {
        event.preventDefault();
        search();
    }
    
      function cityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready){
        return (
            <div className="Container">
                <div className="Search">
                    <form onSubmit={handleSearch}>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Enter a city..."
                                    className="form-contrtol"
                                    autoFocus="on"
                                    onChange={cityChange}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                    type="submit"
                                    value="Search"
                                    className="btn btn-primary w-100"
                                />
                            </div>
                        </div>    
                    </form>  
                </div>
                <WeatherInfo data={weatherData}/> 
                 
                <WeatherForecast coordinates={weatherData.coordinates}/>
                
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}

