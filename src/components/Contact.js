import React from "react";
import "./Contact.css"; // Import the custom CSS file
import pramod from "../assets/pramod.jpg";
import ritika from "../assets/ritika.jpg";
import garvit from "../assets/garvit.jpg";
import { ReactComponent as Insta } from "../assets/insta.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="pb-3 pt-16 bg-[#230c3c] relative z-[0]">
      <div className="flex flex-col justify-center items-center max-w-[85%] mx-auto pt-14 pb-14">
        <div className="flex justify-center items-center gap-4">
          <h1
            className="sec-title font-chelsea mt-8 mb-8"
            data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Contact Us
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card w-48 h-64 overflow-visible relative">
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="image-container w-40 h-40">
                      <img
                        src={pramod}
                        alt="Profile Image"
                        className="w-full h-full object-cover rounded-md"
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="text-lg font-bold">Pramod Sai</h2>
                    <a href="tel:+918919642307">+91 8919642307</a>
                    <div className="social-media flex justify-center items-center gap-4">
                      <span>
                        <a
                          href="https://www.instagram.com/pramod___1?igsh=MWt1M2swNGR5dnlvYw=="
                          target="_blank"
                        >
                          <Insta />
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://www.linkedin.com/in/pramod-sai-972b11289"
                          target="_blank"
                        >
                          <Linkedin />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-48 h-64 overflow-visible relative">
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <div className="image-container w-40 h-40">
                        <img
                          src={ritika}
                          alt="Profile Image"
                          className="w-full h-full object-cover rounded-md"
                          draggable="false"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-lg font-bold">Ritika</h2>
                      <a href="tel:+918919642307">+91 9599265453</a>
                      <div className="social-media flex justify-center items-center gap-4">
                        <span>
                          <a
                            href="https://www.instagram.com/ritika_sirohiya?igsh=MTR6OXh6cnl2amU0NQ=="
                            target="_blank"
                          >
                            <Insta />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/ritika-sirohiya-337035279"
                            target="_blank"
                          >
                            <Linkedin />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-48 h-64 overflow-visible relative">
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <div className="image-container w-40 h-40">
                        <img
                          src={garvit}
                          alt="Profile Image"
                          className="w-full h-full object-cover rounded-md"
                          draggable="false"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-lg font-bold">Garvit Kulhari</h2>
                      <a href="tel:+918919642307">+91 9664169359</a>
                      <div className="social-media flex justify-center items-center gap-4">
                        <span>
                          <a
                            href="https://www.instagram.com/ritika_sirohiya?igsh=MTR6OXh6cnl2amU0NQ=="
                            target="_blank"
                          >
                            <Insta />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/ritika-sirohiya-337035279"
                            target="_blank"
                          >
                            <Linkedin />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
