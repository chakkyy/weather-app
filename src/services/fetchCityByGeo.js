import fetchData from "./fetch";

const apiKey = "79cd9ba3c0c6f51e69332a75e765e856";

export default function fetchCityByGeo(lat, lon, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  ).then((city) => {
    setData((oldCities) => [...oldCities, city]);
  });
}
