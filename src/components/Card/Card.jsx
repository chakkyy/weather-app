import React from "react";
import "./Card.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  CLOUDS,
  CLEAR,
  ATMOSPHERE,
  SNOW,
  RAIN,
  DRIZZLE,
  THUNDERSTORM,
  DEFAULT,
} from "./weatherConstants";

export default function Card(props) {
  const { min, max, name, handleOnClose, id, weather, act } = props;

  const custombackground = () => {
    switch (weather) {
      case "Clouds":
        return CLOUDS;
      case "Clear":
        return CLEAR;
      case "Atmosphere":
        return ATMOSPHERE;
      case "Snow":
        return SNOW;
      case "Rain":
        return RAIN;
      case "Drizzle":
        return DRIZZLE;
      case "Thunderstorm":
        return THUNDERSTORM;
      default:
        return DEFAULT;
    }
  };

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      
    >
      <div class="card">
        <div
          class="card__header"
          style={{
            backgroundImage: `url(${custombackground()})`,
          }}
        >
          <div className="closeIcon">
            <button onClick={handleOnClose} className="boton">
              <IoCloseCircleOutline />
            </button>
          </div>
          <h2 class="card__temp">{act}°</h2>
          <p className="card__weather">{weather}</p>
          <Link to={"/card/" + id} className="card-title">
            <p class="card__name">{name}</p>
          </Link>
        </div>
        <div class="card__temps">
          <p class="card__maxmin">
            Min <span>{min}°</span>
          </p>
          <p class="card__maxmin">
            Max <span>{max}°</span>
          </p>
        </div>
      </div>
    </Tilt>
  );
}
