import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ cartItemCount, triggerAnimation }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-color">
        <img src="/images/logo.png" alt="Pence's Logo" className="logo" />
        <a className="navbar-brand" href="home">
          <p className="logo-name"> Pence's Bakery </p>
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
          <FontAwesomeIcon icon={faBars} className="faBars" />
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
              <a className="nav-link" href="#shop-catalogue">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`btn btn-primary cart-btn 
                  ${
                    triggerAnimation
                      ? "animate__animated animate__bounceIn"
                      : ""
                  }
                  `}
                data-bs-toggle="modal"
                data-bs-target="#cartBtn"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Cart
                <span className="badge text-bg-secondary">{cartItemCount}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
