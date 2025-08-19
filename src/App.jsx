import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherResult from "./components/WeatherResult";
import weatherData from "./data/weatherData.json";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (cityName) => {
    if (!cityName) {
      setWeather(null);
      setError("");
      return;
    }

    // приводим введённое название к нижнему регистру
    const city = cityName.trim().toLowerCase();

    // создаём словарь городов тоже в нижнем регистре
    const normalizedData = Object.keys(weatherData).reduce((acc, key) => {
      acc[key.toLowerCase()] = weatherData[key];
      return acc;
    }, {});

    if (normalizedData[city]) {
      setWeather(normalizedData[city]);
      setError("");
    } else {
      setWeather(null);
      setError("Город не найден ❌");
    }
  };

  return (
    <div className="App">
      <h1>🌍 Погода</h1>
      <WeatherSearch onSearch={handleSearch} />
      <WeatherResult data={weather} error={error} />
    </div>
  );
}

export default App;
