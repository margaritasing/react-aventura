import React from "react";

import Search from "../Search";
import "./City.css"

import Imagen1 from "../images/g-6.jpg";
import Imagen2 from "../images/g-7.jpg";
import Imagen3 from "../images/g-4.jpg";
import Imagen4 from "../images/g-8.jpg";


class City extends React.Component {
  

  render() {
    return (
      <main>
        <Search />
      	<ul id="cards">
        <li className="card" id="card_1">
          <div className="card__content">
            <div>
              <h2>Card One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
              <img src={Imagen1} alt=""></img>
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <div>
              <h2>Card Two</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
              <img src={Imagen2} alt=""></img>
            </figure>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <div>
              <h2>Card Three</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
              <img src={Imagen3} alt=""></img>
            </figure>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div>
              <h2>Card Four</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
              <img src={Imagen4} alt=""></img>
            </figure>
          </div>
        </li>
	</ul>
</main>

    );
  }
}
export default City;
