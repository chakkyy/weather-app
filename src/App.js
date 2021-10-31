import React from "react";
import { Route, Switch } from "react-router-dom";
import fetchCity from "./services/fetchCity";
import styles from "./App.module.css";
import CitiesPage from "./views/CitiesPage";
import CityDetail from "./views/CityDetail";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("No puedes agregar más ciudades.");
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
    <div className={styles.App}>
      {/* Tu código acá: */}
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
        instagram="https://www.instagram.com/chakkycardozo"
        github="https://github.com/chakkyy"
        linkedin="https://www.linkedin.com/in/cmramirezz/"
      />
    </div>
  );
}
