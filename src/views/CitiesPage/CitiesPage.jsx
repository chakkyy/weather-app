import React from "react";
import Cards from "../../components/Cards/Cards.jsx";
import "./CitiesPage.scss";

function CitiesPage({ data, handleOnClose }) {
  return (
    <div className="maincontainer">
      {data.length > 0 ? (
        <Cards cities={data} handleOnClose={handleOnClose} />
      ) : (
        <span className="noCities">There's no cities yet. 😥</span>
      )}
    </div>
  );
}

export default CitiesPage;
