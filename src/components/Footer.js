import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import footer_left from "../assets/footer-left.png";
import footer_right from "../assets/footer-right.png";
import footer_gif from "../assets/footer-gif.gif";
import SocialMediaBar from "./SocialMediaBar";
import Contact from "./Contact";

function Footer() {
  return (
    <>
      <footer
        id="footer-sec"
        className="d-lg-block d-none bg-[#230c3c] overflow-hidden"
      >
        <div className="container">
          <Contact />
          <div className="row"></div>
          <div className="row flex items-end justify-center pt-3">
            <div className="mt-[190px] flex items-center justify-center">
              <div className="footer-box-logo flex items-center justify-center relative z-[2]">
                <img src={logo} alt="abhyuday logo" draggable="false" />
              </div>
              <SocialMediaBar className="pl-2 mt-16" />
            </div>
          </div>
        </div>
        <span className="shape2 footer-shape">
          <img
            src={footer_left}
            alt="footer shape left"
            draggable="false"
            loading="lazy"
          />
        </span>
        <span className="shape3 footer-shape">
          <img
            src={footer_right}
            alt="footer shape right"
            draggable="false"
            loading="lazy"
          />
        </span>
        <div className="h-16"></div>
        <span className="shape1 footer-shape">
          <img
            src={footer_gif}
            className="gif"
            width="100%"
            alt="footer shape"
            draggable="false"
            loading="lazy"
          />
        </span>
      </footer>
    </>
  );
}

export default Footer;
