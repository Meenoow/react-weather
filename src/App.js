import React from 'react'
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        Coded by 
        <a 
        href=""
        target="_blank"
        rel="noopener noreferrer"
        >
        Ximena Castillo
        </a> and{" "}
        <a 
        href="https://github.com/Meenoow/react-weather" 
        target="_blank"
        rel="noopener noreferrer"
        >
        Open-sourced on GitHub
        </a> 
      </footer>  
    </div>
  );
}


