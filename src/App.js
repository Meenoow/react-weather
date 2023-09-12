import React from 'react'
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <footer>
        Coded by <a href="">Ximena Castillo</a> and{" "}
        <a href="https://github.com/Meenoow/react-weather" target="_blank">
        Open-sourced on GitHub
        </a> 
      </footer>  
    </div>
  );
}


