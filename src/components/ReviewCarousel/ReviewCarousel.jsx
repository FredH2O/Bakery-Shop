import React from "react";
import "./ReviewCarousel.css";

export default function ReviewCarousel() {
  return (
    <div className="carousel-main-container">
      <div
        id="reviewCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="review-item">
              <p>"Great service, would highly recommend!1"</p>
              <h5>- Customer Name</h5>
            </div>
          </div>
          <div className="carousel-item">
            <div className="review-item">
              <p>"Delicious cakes, perfect for every occasion.2"</p>
              <h5>- Another Customer</h5>
            </div>
          </div>
          <div className="carousel-item">
            <div className="review-item">
              <p>"Delicious cakes, perfect for every occasion.3"</p>
              <h5>- Another Customer</h5>
            </div>
          </div>
          <div className="carousel-item">
            <div className="review-item">
              <p>"Delicious cakes, perfect for every occasion.4"</p>
              <h5>- Another Customer</h5>
            </div>
          </div>
          <div className="carousel-item">
            <div className="review-item">
              <p>"Delicious cakes, perfect for every occasion."</p>
              <h5>- Another Customer</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#reviewCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#reviewCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
