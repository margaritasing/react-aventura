import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className=" my-5">
        <footer className="text-center text-white">
          <div>
            <section className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link className="text-white" to="/cities">
                      Cities
                    </Link>
                  </h6>
                </div>
              </div>
            </section>

            <hr className="my-5" />

            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center mb-5">
              <a href="https://twitter.com/LibiaMFM" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/libia-m-freites-m/" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/margaritasing" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div className="text-center p-3">
            Libia M Freites M <br />© 2022
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
