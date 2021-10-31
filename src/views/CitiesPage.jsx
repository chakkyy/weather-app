import React from "react";
import Cards from "../components/Cards.jsx";

function CitiesPage({ data, handleOnClose }) {
  return (
    <>
      <div>
        {data.length > 0 ? (
          <>
            <Cards cities={data} handleOnClose={handleOnClose} />
          </>
        ) : (
          <span
            style={{
              textAlign: "center",
              width: "70vw",
              marginTop: "1rem",
              fontSize: "2rem",
              color: "aliceblue",
            }}
          >
            Add a city 🌝
          </span>
        )}
      </div>
    </>
  );
}

export default CitiesPage;
