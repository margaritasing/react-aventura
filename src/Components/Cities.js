import React from "react";
import City from "./City";

import Imagen1 from "./images/g-3.jpg";
import Imagen2 from "./images/g-4.jpg";
import Imagen3 from "./images/g-5.jpg";
import Imagen4 from "./images/g-6.jpg";
import Imagen5 from "./images/g-7.jpg";
import Imagen6 from "./images/g-8.jpg";

function Cities() {
  return (
    <section className="cities" id="cities">
      <h1 className="c-texto">Cities</h1>
      <div className="gallery">
        <a href="/">
          <img src={Imagen1} alt=""></img>
        </a>
        <a href="/">
          <img src={Imagen2} alt=""></img>
        </a>
        <a href="/">
          <img src={Imagen3} alt=""></img>
        </a>
        <a href="/">
          <img src={Imagen4} alt=""></img>
        </a>
        <a href="/">
          <img src={Imagen5} alt=""></img>
        </a>
        <a href="/">
          <img src={Imagen6} alt=""></img>
        </a>
      </div>
      <City />
    </section>
  );
}

export default Cities;
