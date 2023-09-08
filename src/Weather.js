import React from "react";
import axios from "axios";
import { findAllInRenderedTree } from "react-dom/test-utils";

export default function Weather() {

    function handleResponse(response) {
        alert(`The weather in New York ${response.data.main.temo}`)
    }
    let units = "metric";
    let apiKey = "0d55405ea37f9b16a55f03b2fb1326a2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=${units}`;
    return (
        <h2>
            Hello from earth
        </h2>
    );
}