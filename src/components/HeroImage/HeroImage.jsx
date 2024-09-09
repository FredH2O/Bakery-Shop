import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroImage.css";

const headings = [
  "Baked to perfection...",
  "Freshest bread in the city...",
  "The best desserts in the city...",
];

export default function HeroImage() {
  const [randomMotto, setRandomMotto] = useState("");

  useEffect(() => {
    function updateHeading() {
      const randomIndex = Math.floor(Math.random() * headings.length);
      setRandomMotto(headings[randomIndex]);
    }

    updateHeading();

    const intervalId = setInterval(updateHeading, 5000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero-container">
      <h1 className="hero-heading">{randomMotto}</h1>
    </div>
  );
}
