import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          Bakery
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="custom-navbar-style collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
