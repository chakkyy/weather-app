import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ titulo, onSearch }) {
  return (
    <div className="nav">
      <Link to="/" className="title">
        {titulo}
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
