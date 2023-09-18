import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    return (
        <div>
            <div className="WeatherForecast-day">
                {props.data.dt}
            </div> 
                <WeatherIcon code={props.data.weather[0].icon}size={36}/>
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">
                    {props.data.temp.max}º 
                </span>
                <span className="WeatherForecast-temp-min">
                    {props.data.temp.min}º 
                </span>
            </div>
        </div>
    );
}