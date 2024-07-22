import React from "react";
import Lottie from "lottie-react";
import treasure from "../assets/treasure.json";
import "./WhyUs.css";
import incen1 from "../assets/incen1.jpeg";
import incen2 from "../assets/incen2.jpeg";
import incen3 from "../assets/incen3.jpeg";
import incen4 from "../assets/incen4.jpeg";
import SectionTitle from "./SectionTitle";

function WhyUs() {
  return (
    <section className="bg-[#230c3c] pt-32" id="whyus">
      <div className="flex flex-col justify-center items-center bg-[#230c3c] max-w-[85%] mx-auto">
        <div className="flex justify-center items-center gap-4">
          <SectionTitle title="Why Us ?" />
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
                <p className="text-3xl font-chelsea">Elevate your skill set</p>
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
                <p className="text-3xl font-chelsea">Expand your connection</p>
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
                <p className="text-3xl font-chelsea">Represent your college</p>
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
                <p className="text-3xl font-chelsea">Make a difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
