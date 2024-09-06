import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroImage.css"; // Import your custom CSS

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

    updateHeading(); // Set initial heading

    const intervalId = setInterval(updateHeading, 5000); // Update heading every 5 seconds

    return function () {
      clearInterval(intervalId);
    }; // Clean up interval on component unmount
  }, []);

  return (
    <div className="hero-container">
      <img
        src="/images/hero-wallpaper.jpg"
        className="img-fluid"
        alt="Wallpaper"
      />
      <h1 className="hero-heading">{randomMotto}</h1>
    </div>
  );
}
