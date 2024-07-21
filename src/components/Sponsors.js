import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Sponsors.css";
import boat from "../assets/boat.png";
import coin from "../assets/coin.png";

const Sponsors = () => {
  return (
    <section className="bg-[#230c3c] pt-16" id="sponsors">
      <div className="flex flex-col justify-center items-center max-w-[85%] mx-auto pt-14 pb-14">
        <div className="flex justify-center items-center gap-4">
          <span>
            <img src={coin} alt="Coin" className="coin" draggable="false" loading="lazy"/>
          </span>
          <h1
            className="sec-title font-chelsea mt-8 mb-8"
            data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Sponsors
          </h1>
          <span>
            <img src={coin} alt="Coin" className="coin" draggable="false" loading="lazy"/>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={boat}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={boat}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={boat}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={boat}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
