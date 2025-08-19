import React from "react";
import styles from "./WeatherResult.module.css";

export default function WeatherResult({ data, error }) {
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!data) {
    return <div className={styles.placeholder}>Введите город</div>;
  }

  return (
    <div className={styles.card}>
      <span className={styles.icon}>{data.icon}</span>
      <h2>{data.temp}°C</h2>
      <p>{data.description}</p>
    </div>
  );
}
