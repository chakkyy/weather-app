  
import fetchData from "./fetch";

const apiKey = "79cd9ba3c0c6f51e69332a75e765e856";

export default function fetchCity(ciudad, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => [...oldCities, city]);
    } else {
      alert("Ciudad no encontrada");
    }
  });
}