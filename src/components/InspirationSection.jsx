import React from "react";
import ImageCard from "./ImageCard";
import "./Inspiration.css";

export default function InspirationSection() {
  return (
    <section className="inspiration">
      <div className="content">
        <div className="text">
          <h1>
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p>
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button>Explore More</button>
        </div>

        <ImageCard />
      </div>
    </section>
  );
}
