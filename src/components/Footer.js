import React from "react";
import './Footer.css';
import logo from "../assets/logo.png";
import footer_left from "../assets/footer-left.png";
import footer_right from "../assets/footer-right.png";
import footer_gif from "../assets/footer-gif.gif";
import SocialMediaBar from "./SocialMediaBar";

function Footer() {
  return (
    <>
      <footer id="footer-sec" className="d-lg-block d-none bg-[#230c3c] overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center pb-5 footer-links">
                <h3 className="touch-title pb-3">More Information</h3>
                <a href="/legal/cookies-policy/">Cookies Policy</a>
                <a href="/legal/privacy-policy/">Privacy Policy</a>
                <a href="/legal/end-user-privacy-policy/">
                  End User Privacy Policy
                </a>
                <a href="/legal/terms-and-conditions/">Terms and Conditions</a>
                <a href="/legal/dpa/">DPA</a>
                <a href="/legal/security/">Security</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center pb-5">
                <h3 className="touch-title pb-3">Get In Touch</h3>
              </div>
            </div>
          </div>
          <div className="row flex items-end justify-center pt-3">
            <div className="mt-[190px] flex items-center justify-center">
              <div className="footer-box-logo flex items-center justify-center relative z-[2]">
                <img src={logo} alt="abhyuday logo" draggable="false"/>
              </div>
              <SocialMediaBar className="pl-2 mt-16"/>
              {/* <div className="social-media-icon">
                <ul className="mb-0">
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.5s"
                  >
                    <a href="https://medium.com/@bootyledger" target="_blank">
                      <svg
                        id="medium"
                        width="24"
                        height="24"
                        data-name="medium"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <circle
                          className="cls-1"
                          cx="18.94"
                          cy="30.21"
                          r="16.39"
                        ></circle>
                        <ellipse
                          className="cls-1"
                          cx="44.7"
                          cy="30.21"
                          rx="8.01"
                          ry="15.16"
                        ></ellipse>
                        <ellipse
                          className="cls-1"
                          cx="57.49"
                          cy="30.21"
                          rx="2.75"
                          ry="13.83"
                        ></ellipse>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.2s"
                  >
                    <a
                      href="https://www.youtube.com/channel/UCvY5juouFwQioV4zVGnOTPA"
                      target="_blank"
                    >
                      <svg
                        id="youtube"
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0617 2.93984C20.9422 2.49462 20.7078 2.0886 20.382 1.76243C20.0563 1.43625 19.6505 1.20136 19.2055 1.08125C17.5672 0.640625 11 0.640625 11 0.640625C11 0.640625 4.43281 0.640625 2.79453 1.07891C2.34927 1.19862 1.94334 1.43339 1.61751 1.75962C1.29169 2.08586 1.05744 2.49208 0.938281 2.9375C0.5 4.57812 0.5 8 0.5 8C0.5 8 0.5 11.4219 0.938281 13.0602C1.17969 13.9648 1.89219 14.6773 2.79453 14.9188C4.43281 15.3594 11 15.3594 11 15.3594C11 15.3594 17.5672 15.3594 19.2055 14.9188C20.1102 14.6773 20.8203 13.9648 21.0617 13.0602C21.5 11.4219 21.5 8 21.5 8C21.5 8 21.5 4.57813 21.0617 2.93984ZM8.91406 11.1406V4.85938L14.3516 7.97656L8.91406 11.1406Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.3s"
                  >
                    <a
                      href="https://www.tiktok.com/@bootyledger"
                      target="_blank"
                    >
                      <svg
                        id="tiktok"
                        width="24"
                        height="24"
                        data-name="tiktok"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          className="cls-1"
                          d="M23,58.87a16.36,16.36,0,0,1-5.93-1.09A14.79,14.79,0,0,1,8.74,50a16.39,16.39,0,0,1,2.44-17.69C14.78,28.19,19.75,26.4,26,27l-.43,7.64c-3.72-.36-6.67.45-8.61,2.69a8.9,8.9,0,0,0-1.3,9.48,7.29,7.29,0,0,0,4.17,3.87,9,9,0,0,0,5.36.32,8.29,8.29,0,0,0,4-2.2,7.94,7.94,0,0,0,2.12-5.57V7.79c0-.3,0-.61,0-.92L38.9,7v.73a13.31,13.31,0,0,0,3.9,8.53,13.72,13.72,0,0,0,9.91,4.24v7.62A21.19,21.19,0,0,1,38.9,23V43.23a15.41,15.41,0,0,1-4.32,10.92A15.85,15.85,0,0,1,27,58.38,16.59,16.59,0,0,1,23,58.87Z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.4s"
                  >
                    <a href="https://t.me/+BTYbHkPrfZ4wMmY8" target="_blank">
                      <svg
                        id="telegram"
                        width="24"
                        height="24"
                        data-name="telegram"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          className="cls-1"
                          d="M53.19,9.74,5.1,28.1a2,2,0,0,0,.14,3.75l11.32,3.38,5,14.91a1.57,1.57,0,0,0,2.58.63l6.94-6.62,13,9.44a2.08,2.08,0,0,0,3.26-1.27L55.62,11.8A1.81,1.81,0,0,0,53.19,9.74Zm-7,8.8-22,19.9-1.27,9.09L18.71,34.3,45.53,17.61A.58.58,0,0,1,46.23,18.54Z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.5s"
                  >
                    <a
                      href="https://rumble.com/user/bootyledger"
                      target="_blank"
                    >
                      <svg
                        id="rumble"
                        width="24"
                        height="24"
                        data-name="rumble"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          className="cls-1"
                          d="M56.18,27.05a20.38,20.38,0,0,0-3.37-4.41c-4.22-4.31-11-8.38-20.41-13.16C16.62,1.5,8.76,13.29,8.76,25.41l-.17,8,.17,8c0,5.57,1.66,11,5,14.6,3.91,4.17,10.12,5.65,18.67,1.33C45,51,52.82,45.84,56.18,39.75a13.26,13.26,0,0,0,0-12.7Zm-16,8.58c-1.18,2.14-3.94,3.94-8.36,6.18-3,1.52-5.18,1-6.56-.47a7.63,7.63,0,0,1-1.75-5.13l-.06-2.81.06-2.81c0-4.26,2.76-8.41,8.31-5.6,3.32,1.68,5.7,3.11,7.18,4.62a7.2,7.2,0,0,1,1.18,1.56,4.65,4.65,0,0,1,0,4.46Z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="scroll-icon wow fadeInRight animated"
                    data-animate="fadeInRight"
                    data-delay="0.6s"
                  >
                    <a href="https://twitter.com/booty_ledger" target="_blank">
                      <svg
                        id="twitter"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.643 4.93659C22.808 5.30659 21.911 5.55659 20.968 5.66959C21.941 5.08738 22.669 4.17106 23.016 3.09159C22.1019 3.63458 21.1014 4.01678 20.058 4.22159C19.3564 3.47245 18.4271 2.97591 17.4143 2.80906C16.4016 2.64221 15.3621 2.81438 14.4572 3.29884C13.5524 3.7833 12.8328 4.55295 12.4102 5.48829C11.9875 6.42364 11.8855 7.47234 12.12 8.47159C10.2677 8.37859 8.45564 7.89714 6.80144 7.05849C5.14723 6.21985 3.68785 5.04275 2.51801 3.60359C2.11801 4.29359 1.88801 5.09359 1.88801 5.94559C1.88757 6.71258 2.07644 7.46783 2.43789 8.14432C2.79934 8.82081 3.32217 9.39763 3.96001 9.82359C3.22029 9.80005 2.49688 9.60017 1.85001 9.24059V9.30059C1.84994 10.3763 2.22204 11.419 2.90319 12.2516C3.58434 13.0842 4.53258 13.6555 5.58701 13.8686C4.9008 14.0543 4.18135 14.0817 3.48301 13.9486C3.78051 14.8742 4.36001 15.6836 5.14038 16.2635C5.92075 16.8434 6.86293 17.1648 7.83501 17.1826C6.18484 18.478 4.1469 19.1807 2.04901 19.1776C1.67739 19.1777 1.30609 19.156 0.937012 19.1126C3.06649 20.4818 5.54535 21.2084 8.07701 21.2056C16.647 21.2056 21.332 14.1076 21.332 7.95159C21.332 7.75159 21.327 7.54959 21.318 7.34959C22.2293 6.69056 23.0159 5.87449 23.641 4.93959L23.643 4.93659Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <span className="shape2 footer-shape">
          <img src={footer_left} alt="footer shape left" draggable="false"/>
        </span>
        <span className="shape3 footer-shape">
          <img src={footer_right} alt="footer shape right" draggable="false"/>
        </span>
        <div className="h-16"></div>
        <span className="shape1 footer-shape">
          <img
            src={footer_gif}
            className="gif"
            width="100%"
            alt="footer shape"
            draggable="false"
          />
        </span>
      </footer>
    </>
  );
}

export default Footer;
