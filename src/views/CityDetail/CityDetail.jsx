import React from "react";
import fetchCityById from "../../services/fetchCityById";
import styles from "./CityDetail.module.css";

function CityDetail({ id, onBack }) {
  const button = "<";
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchCityById(id, setCity);
  }, [id, setCity]);

  return (
    <div className={styles.city}>
      {city === undefined && <h2>Cargando...</h2>}
      {city === null && <h2>Ciudad no encontrada</h2>}
      {city && (
        <div className={styles.detail}>
          <button className={styles.button} onClick={onBack}>
            {button}
          </button>
          <div className={styles.name}>
            <span>{city.name}</span>
            <span> ({city.country})</span>
          </div>
          <div className={styles.temp}>
            <span>{city.act}°</span>
          </div>
          <div className={styles.temps}>
            <label>Max: {city.max}°</label>
            <img
              className={styles.clima}
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
            <label>Min: {city.min}°</label>
          </div>
          <div className={styles.info}>
            <label>Feels like: {city.sensacion}°</label>
            <label>Cloudiness: {city.clouds}%</label>
            <label>Weather: {city.weather}</label>
            <label>Wind Speed: {city.wind}km/h</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
