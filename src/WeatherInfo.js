import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="Place">
                <h1>{props.data.city}</h1>
                <h2><FormattedDate date={props.data.date}/></h2>      
            </div>
            <div className="WeatherDescription">
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix d-flex align-items-center">
                            <div className="float-left">
                                <WeatherIcon code={props.data.icon} size={96}/>
                                <li className="text-capitalize">{props.data.description}</li>
                            </div>
                        </div>    
                    </div>
                    <div className="col-6">
                        <div className="Temp">
                            <WeatherTemperature celsius={props.data.temperature}/>
                        </div>
                        <ul>
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>
                            <li>
                                Wind: {props.data.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}