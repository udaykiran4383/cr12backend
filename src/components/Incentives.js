import React from "react";
import Lottie from "lottie-react";
import treasure from "../assets/treasure.json";
import "./Incentives.css";
import incen1 from "../assets/incen1.jpeg";
import incen2 from "../assets/incen2.jpeg";
import incen3 from "../assets/incen3.jpeg";
import incen4 from "../assets/incen4.jpeg";

function Incentives() {
  return (
    <section className="bg-[#230c3c] pt-16" id="incentives">
      <div className="flex flex-col justify-center items-center bg-[#230c3c] max-w-[85%] mx-auto">
        <div className="flex justify-center items-center gap-4">
          <span>
            <Lottie
              animationData={treasure}
              loop={true}
              className="treasure-svg"
            />
          </span>
          <h1
            className="sec-title text-center font-chelsea mt-12 mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Incentives
          </h1>
          <span>
            <Lottie
              animationData={treasure}
              loop={true}
              className="treasure-svg"
            />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={incen1}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <p>Get connected to us!</p>
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={incen2}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="path/to/back-image.jpg"
                  alt="Back"
                  draggable="false"
                  className="flip-card-image"
                />
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={incen3}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="path/to/back-image.jpg"
                  alt="Back"
                  className="flip-card-image"
                  draggable="false"
                />
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={incen4}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
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
