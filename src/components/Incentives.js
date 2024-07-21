import React from "react";
import "./Incentives.css";
import incen1 from "../assets/incen1.jpeg";
import incen2 from "../assets/incen2.jpeg";
import incen3 from "../assets/incen3.jpeg";
import incen4 from "../assets/incen4.jpeg";

function Incentives() {
  return (
    <section className="bg-[#230c3c] relative z-[25] pt-16" id="incentives">
      <div className="flex flex-col justify-center items-center bg-[#230c3c] max-w-[85%] mx-auto">
        <h1
          className="sec-title font-chelsea mt-8 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Incentives
        </h1>
        <div className="flex justify-between items-center flex-wrap gap-x-4">
          <div className="flip-card" data-aos="fade-up"
          data-aos-duration="1500">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={incen1} alt="Front" className="flip-card-image" />
              </div>
              <div className="flip-card-back">
                <p>Get connected to us!</p>
              </div>
            </div>
          </div>
          <div className="flip-card" data-aos="fade-up"
          data-aos-duration="1500">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={incen2} alt="Front" className="flip-card-image" />
              </div>
              <div className="flip-card-back">
                <img
                  src="path/to/back-image.jpg"
                  alt="Back"
                  className="flip-card-image"
                />
              </div>
            </div>
          </div>
          <div className="flip-card" data-aos="fade-up"
          data-aos-duration="1500">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={incen3} alt="Front" className="flip-card-image" />
              </div>
              <div className="flip-card-back">
                <img
                  src="path/to/back-image.jpg"
                  alt="Back"
                  className="flip-card-image"
                />
              </div>
            </div>
          </div>
          <div className="flip-card" data-aos="fade-up"
          data-aos-duration="1500">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={incen4} alt="Front" className="flip-card-image" />
              </div>
              <div className="flip-card-back">
                <img
                  src="path/to/back-image.jpg"
                  alt="Back"
                  className="flip-card-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Incentives;
