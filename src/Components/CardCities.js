import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import Imagen from "./images/g-2.jpg";

function CardCities() {
  return (
    <div className="container">
      <div className="a">
        <div className="a-left">
          <div className="a-texto">
            <div className="a-parrafo">
              <h3>Ushuaia</h3>
              <h6>Argentina</h6>
              <p>
                Ushuaia es una ciudad turística de Argentina.Se ubica en el
                archipiélago de Tierra del Fuego,el extremo austral de
                Sudamérica, apodado el <br />
                "Fin del Mundo".
              </p>
            </div>
            <LinkRouter to="/city">
              <button type="button" className="btn btn-lg a-boton">
                Leer mas..
              </button>
            </LinkRouter>
          </div>
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Imagen} alt="" className="a-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCities;
