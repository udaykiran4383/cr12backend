import React from "react";
import strip from "../assets/Strip-Top.png";
import "./About.css";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="pb-3 bg-[#230c3c]">
      <span className="shape6">
        <img src={strip} className="w-full" alt="strip-top" draggable="false" />
      </span>
      <div className="container z-[25]">
        <div>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="text-center px-4 flex flex-col justify-center items-center">
              <SectionTitle title="About Us" />
              <p
                className="desc mb-4 max-w-[50%] text-pretty font-oswald relative z-[2]"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                Abhyuday , IIT Bombay is a student-led organization that fosters
                youth responsibility & leadership in India, inspiring and
                empowering young individuals to contribute to society and drive
                positive change through various initiatives. <br />
                {/* Aye me matey! So
                yer chest of treasures is awash with a variety of assets. And
                rightly, bloody, so! Assets, savings, stocks, investments,
                crypto…a self-respecting pirate has it all in their booty. Want
                to track their performance in real time, then? Aye, don't we
                all. Alas!
                <br />
                <br />
                Majority of these blasted portfolio trackers allow their users
                to track only a single type of asset. Of what use then, yer
                right to ask, is a log that only tells its captain one part of
                the story? Unless you download all them apps… but then again,
                wasn't diversification supposed to lead us on a star-lit pathway
                to freedom rather than gout from obsessively refreshing all the
                bloody apps!? Arrr! <br />
                <br />
                BootyLedger allows you to grab the helm of yer financial ship
                and steer it wisely in real-time. Always keep a few leagues
                ahead of the bloody Armada! */}
              </p>
              <p
                className="desc mb-4 max-w-[50%] text-pretty font-oswald relative z-[2]"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                Ahoy, mateys! Gather 'round and lend yer ears. We're a crew of
                spirited young buccaneers, charting a course through the seas of
                change. At Abhyuday, we're not just students; we're the captains
                of tomorrow, hoisting the sails of leadership and steering
                towards a brighter horizon. We be on a mission to inspire and
                empower our fellow shipmates, showin' 'em the ropes of
                responsibility and the true meaning of camaraderie. Join us on
                this grand adventure, and together, we'll conquer the seven seas
                of positive change!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
