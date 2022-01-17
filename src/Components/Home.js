import React from "react";

import { Link as LinkRouter } from "react-router-dom";

import CardCities from "./CardCities";

import Video1 from "./images/vid-1.mp4";
import Imagen from "./images/p-3.jpg";
import Imagen2 from "./images/p-4.jpg";
import Imagen3 from "./images/p-5.jpg";

const Home = () => {
  return (
    <div>
      <div className="homen">
        <video className="video-home" src={Video1} controls></video>
        <div className="h-presentacion">
          <p className="home-text">
            La mejor aventura, viaja junto a nosotros <br />
            No te pierdas la oportunidad de recorrer <br />
            los lugares mas hermosos
          </p>
          <LinkRouter to="/cities">
            <button type="button" class="btn  btn-lg h-boton">
              Cities..
            </button>
          </LinkRouter>
        </div>
      </div>
      <CardCities />

      <div className="container  h-carrusel">
        <div
          id="carouselExampleInterval"
          className="carousel slide col-lg-10"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={Imagen} className="d-block w-100 h-img" alt="..."></img>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={Imagen2}
                className="d-block w-100 h-img"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={Imagen3}
                className="d-block w-100 h-img"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
