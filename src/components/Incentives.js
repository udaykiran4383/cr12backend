// import React from "react";
// import Lottie from "lottie-react";
// import treasure from "../assets/treasure.json";
// import "./Incentives.css";
// import incen1 from "../assets/incen1.jpeg";
// import incen2 from "../assets/incen2.jpeg";
// import incen3 from "../assets/incen3.jpeg";
// import incen4 from "../assets/incen4.jpeg";
// import SectionTitle from "./SectionTitle";

// function Incentives() {
//   return (
//     <section className="bg-[#230c3c] pt-32" id="incentives">
//       <div className="flex flex-col justify-center items-center bg-[#230c3c] max-w-[85%] mx-auto">
//         <div className="flex justify-center items-center gap-4">
//           <span>
//             <Lottie
//               animationData={treasure}
//               loop={true}
//               className="treasure-svg pb-4"
//             />
//           </span>
//           <SectionTitle title="Incentives"/>
//           <span>
//             <Lottie
//               animationData={treasure}
//               loop={true}
//               className="treasure-svg pb-4"
//             />
//           </span>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div
//             className="flip-card"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={incen1}
//                   alt="Front"
//                   className="flip-card-image"
//                   loading="lazy"
//                   draggable="false"
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <p>Get connected to us!</p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flip-card"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={incen2}
//                   alt="Front"
//                   className="flip-card-image"
//                   loading="lazy"
//                   draggable="false"
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <img
//                   src="path/to/back-image.jpg"
//                   alt="Back"
//                   draggable="false"
//                   className="flip-card-image"
//                 />
//               </div>
//             </div>
//           </div>
//           <div
//             className="flip-card"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={incen3}
//                   alt="Front"
//                   className="flip-card-image"
//                   loading="lazy"
//                   draggable="false"
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <img
//                   src="path/to/back-image.jpg"
//                   alt="Back"
//                   className="flip-card-image"
//                   draggable="false"
//                 />
//               </div>
//             </div>
//           </div>
//           <div
//             className="flip-card"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={incen4}
//                   alt="Front"
//                   className="flip-card-image"
//                   loading="lazy"
//                   draggable="false"
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <img
//                   src="path/to/back-image.jpg"
//                   alt="Back"
//                   className="flip-card-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Incentives;
import React from "react";
import Lottie from "lottie-react";
import treasure from "../assets/treasure.json";
import SectionTitle from "./SectionTitle";
import manasvi from "../assets/boat.png";
import "./Incentives.css";

const Incentives = () => {
  return (
    <section id="incentives" className="bg-[#230c3c] text-gray-300 pt-16">
      <div className="campaigns-container1">
        <div className="wrapper1">
          <section>
            <div className="flex justify-center items-center gap-4">
              <span>
                <Lottie
                  animationData={treasure}
                  loop={true}
                  className="treasure-svg pb-4"
                />
              </span>
              <SectionTitle title="Incentives" />
              <span>
                <Lottie
                  animationData={treasure}
                  loop={true}
                  className="treasure-svg pb-4"
                />
              </span>
            </div>
            <div className="cols1">
              <div className="col1" data-aos="zoom-in">
                <div className="container1">
                  <div className="front1">
                    <div className="profile-card1">
                      <div className="img-container1">
                        <img src={manasvi} alt="Manasvi" />
                      </div>
                      <div className="caption1">
                        <p>Events & Fellowships Manager</p>
                        <h4>7021920836</h4>
                      </div>
                    </div>
                    {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                  </div>
                </div>
              </div>
              <div className="col1" data-aos="zoom-in">
                <div className="container1">
                  <div className="front1">
                    <div className="profile-card1">
                      <div className="img-container1">
                        <img src={manasvi} alt="Manasvi" />
                      </div>
                      <div className="caption1">
                        <p>Events & Fellowships Manager</p>
                        <h4>7021920836</h4>
                      </div>
                    </div>
                    {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
