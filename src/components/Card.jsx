import React from 'react';
import './Card.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';


export default function Card (props) {
    const {min, max, name, img, handleOnClose, id, weather, act,country} = props;
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={handleOnClose} className="boton"><IoCloseCircleOutline/></button>
        </div>
        <div className="card-body">
          <Link to={"/card/"+id} className="card-title">{name}<span className="country">({country})</span></Link>
          <h5 className="card-temp">{act}°</h5>
          <h6 className="card-subtitle">({weather})</h6>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 res">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 res">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
