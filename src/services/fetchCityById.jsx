import fetchData from "./fetch";

const apiKey = "79cd9ba3c0c6f51e69332a75e765e856";

export default function fetchCityById(id, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData(city);
    } else {
      setData(null);
    }
  });
}