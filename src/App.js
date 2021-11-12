import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import fetchCity from "./services/fetchCity";
import CitiesPage from "./views/CitiesPage/CitiesPage";
import CityDetail from "./views/CityDetail/CityDetail";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import Swal from "sweetalert2";
import fetchCityByGeo from "./services/fetchCityByGeo";

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchCityByGeo(
        position.coords.latitude,
        position.coords.longitude,
        setData
      );
    });
  }, []);
  function onSearch(ciudad) {
    if (data.length === 3) {
      Swal.fire({
        icon: "error",
        title: "Sorry, you can add up to 3 cities. 😥",
        text: "Please remove a city and try again.",
      });
    }
    if (
      data.filter((city) => city.name.toLowerCase() === ciudad.toLowerCase())
        .length !== 0
    ) {
      return Swal.fire({
        icon: "error",
        title: "Sorry, you can't add the same city twice. 😥",
        text: "Please remove the city and try again.",
      });
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  return (
    <div className="app">
      <Nav titulo="Weather App" onSearch={onSearch} />
      <Switch>
        <Route exact path="/">
          <CitiesPage data={data} handleOnClose={handleOnClose} />
        </Route>
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/card/:id"
          render={({ match, history }) => {
            const id = parseInt(match.params.id);
            return <CityDetail id={id} onBack={history.goBack} />;
          }}
        />
      </Switch>
      <Footer
        titulo="Weather App"
        portfolio="https://cramirez.vercel.app/"
        github="https://github.com/chakkyy"
        linkedin="https://www.linkedin.com/in/cmramirezz/"
      />
    </div>
  );
}
