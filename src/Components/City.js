import React from "react";

import Search from "./Search";

import Imagen1 from "./images/g-2.jpg";
import Imagen2 from "./images/g-7.jpg";
import Imagen3 from "./images/g-4.jpg";
import Imagen4 from "./images/g-8.jpg";


class City extends React.Component {
  

  render() {
    return (
      <div>
        <Search />

        

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col-lg-5  distancia">
            <div className="card">
              <img src={Imagen1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 distancia">
            <div className="card">
              <img src={Imagen2} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 distancia">
            <div className="card">
              <img src={Imagen3} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 distancia">
            <div className="card">
              <img src={Imagen4} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}
export default City;
