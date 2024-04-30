import React from "react";
import Logout from "pages/logout";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
      <div className="container-fluid">
        <a href="/#">
          {/* <img src="assets/images/logo-icon-3.png" alt="" /> */}
          <p>Your Logo</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 login-menu-2">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link6
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <NavLink
              key={"logout"}
              to={"/logout"}
              className={"btn btn-sm btn-primary px-4 radius-30"}
              // end={item.path === "/"}
            >
              Logout
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
