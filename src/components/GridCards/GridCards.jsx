import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GridCards.css";

export default function GridCards() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <div className="card-shade">
            <img
              src="/images/croissant.jpg"
              className="card-img-top"
              alt="Croissant"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Croissant</h5>
            <p className="card-text">
              Flaky, buttery pastries with a delicate, layered texture. Ideal
              for breakfast or a sophisticated snack, often enjoyed plain or
              filled with chocolate or almond paste.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-shade">
            <img
              src="/images/doughnut.jpg"
              className="card-img-top"
              alt="Doughnut"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Doughnut</h5>
            <p className="card-text">
              Fried or baked pastries with a light, fluffy interior. Often
              glazed or topped with sugar, sprinkles, or fillings like jam or
              cream.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-shade">
            <img
              src="/images/sourdough.jpg"
              className="card-img-top"
              alt="Sourdough"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Sourdough</h5>
            <p className="card-text">
              A tangy, artisanal bread made from naturally fermented dough.
              Known for its chewy crust and distinctive sour flavor, perfect for
              sandwiches or toasting.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-shade">
            <img
              src="/images/cookies.jpg"
              className="card-img-top"
              alt="Cookies"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Cookies</h5>
            <p className="card-text">
              Classic, sweet treats with a variety of flavors and textures.
              Enjoy soft, chewy, or crispy versions with chocolate chips, nuts,
              or dried fruits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
