import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroImage.css";
import SearchBar from "./SearchBar";
import "animate.css";

const headings = [
  "Baked to perfection...",
  "Freshest bread in the city...",
  "The best desserts in the city...",
  "Indulge in sweetness...",
  "Deliciously crafted daily...",
  "A taste of heaven...",
  "Artisan baked with love...",
  "Your go-to for gourmet treats...",
  "Freshly made, just for you...",
  "Savor the flavor of quality...",
  "Where every bite is a delight...",
  "Handmade with the finest ingredients...",
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
    <>
      <div className="hero-container hero-search">
        <SearchBar />
        <h1 className="hero-heading animate__animated animate__pulse animate__slower animate__infinite">
          {randomMotto}
        </h1>
      </div>
    </>
  );
}
