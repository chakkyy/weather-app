import React from "react";
import "./Cards.css";

import Card from "../Card/Card.jsx";

export default function Cards({ cities, handleOnClose }) {
  if (cities) {
    cities.reverse();
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            handleOnClose={() => handleOnClose(c.id)}
            key={c.id}
            weather={c.weather}
            act={c.act}
            country={c.country}
            id={c.id}
            clouds={c.clouds.all}
            wind={c.wind.speed}
            sensacion={c.sensacion}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
