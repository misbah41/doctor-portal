import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-3" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                Dental Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 text-white" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 text-white" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
