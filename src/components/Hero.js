import React from "react";
import heroImg from "../images/hero.jpg"; // place your hero image in src/images

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Welcome to Luxury Stay Hotel</h1>
        <p>Experience comfort and luxury like never before</p>
      </div>
    </section>
  );
}

export default Hero;