import React from "react";
import { Link as LinkRouter } from "react-router-dom";

function Register() {
  const [showMenu, setShowMenu] = React.useState(false);
  function mostrarMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <div className="h-registro">
      <>
        <button className="d-flex icons me-6" onClick={mostrarMenu}>
          <i className="fas fa-user"></i>
        </button>
        {showMenu && (
          <div className="h-usuario">
            <LinkRouter to="/signin">
              <button type="button" class="btn btn-dark mt-2">
                Sign In
              </button>
            </LinkRouter>

            <LinkRouter to="/signup">
              <button type="button" class="btn btn-light  ms-3 mt-2">
                Sign Up
              </button>
            </LinkRouter>
          </div>
        )}
      </>
    </div>
  );
}

export default Register;
