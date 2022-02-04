import React from "react";
import TeamImage1 from "../../assets/img/team-img1.png";
import TeamImage2 from "../../assets/img/team-img2.png";
import TeamImage3 from "../../assets/img/team-img3.png";
import TeamImage4 from "../../assets/img/team-img4.png";
const Index = () => {
  return (
    <section id="team" className="team-part py-6 bg-warning jumptarget">
      <div className="container">
        <h2 className="main-title center whitedot">
          <strong>Meet the movers and shakers behind The Trollsinbikinis</strong>
        </h2>
        <p className="rarity-para">
          The Trollsinbikinis was established by a squad that are devoted to NFTs.
          These highly experienced crew created the marvelous world of The
          Trollsinbikinis.{" "}
        </p>
        <div className="row">
          <div
            className="col-lg-3 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <img className="mb-2" src={TeamImage1} alt="TeamImage1" />
            <h4 className="font-weight-bold team-title">
              Shaun
              <span className="font-weight-normal d-block">NFT Enthusiast</span>
            </h4>
            <p className="mb-0">
              Alfredo eats, sleeps and breaths NFT and Crypto. He’s an NFT lover
              and hodler of crypto for life.
            </p>
          </div>
          <div
            className="col-lg-3 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <img className="mb-2" src={TeamImage2} alt="TeamImage2" />
            <h4 className="font-weight-bold team-title">
              Yegor
              <span className="font-weight-normal d-block">
                Creative Artist
              </span>
            </h4>
            <p className="mb-0">
              Yegor is the art director who is a pro at creating the most
              visually stunning pieces of art.
            </p>
          </div>
          <div
            className="col-lg-3 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            <img className="mb-2" src={TeamImage3} alt="TeamImage3" />
            <h4 className="font-weight-bold team-title">
              Alex
              <span className="font-weight-normal d-block">
                Marketing Wizard
              </span>
            </h4>
            <p className="mb-0">
              Alex is a marketing genius and no one can beat him at marketing
              strategies and management.
            </p>
          </div>
          <div
            className="col-lg-3 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <img className="mb-2" src={TeamImage4} alt="TeamImage4" />
            <h4 className="font-weight-bold team-title">
              Viktor
              <span className="font-weight-normal d-block">Coding Freak</span>
            </h4>
            <p className="mb-0">
              A pro at coding and programming, Beast has years of experience in
              development - a wizard for sure.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
