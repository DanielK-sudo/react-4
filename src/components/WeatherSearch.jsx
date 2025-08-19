import React, { useState } from "react";
import styles from "./WeatherSearch.module.css";

export default function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");

  
  let timer;
  const debouncer = (fn, delay) => {
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = debouncer(onSearch, 700);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Введите город..."
        className={styles.input}
      />
    </div>
  );
}
