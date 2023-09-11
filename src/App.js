import React from 'react'
import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <footer>
        Coded by <a href="">Ximena Castillo</a> and{" "}
        <a href="https://github.com/Meenoow/react-weather" target="_blank">
        Open-sourced on GitHub
        </a> 
      </footer>  
      <button className="btn btn-primary">Hello</button>
    </div>
  );
}


