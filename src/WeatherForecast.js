import React , { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "0d55405ea37f9b16a55f03b2fb1326a2";
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&unit=metric`;
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
    
        axios.get(apiUrl).then(handleResponse);
    }
}