import fetchData from "./fetch";
import Swal from "sweetalert2";
const apiKey = "79cd9ba3c0c6f51e69332a75e765e856";

export default function fetchCity(ciudad, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => [...oldCities, city]);
    } else {
      Swal.fire({
        icon: "error",
        title: "City not found 😓",
        text: "Please try again",
      });
    }
  });
}
