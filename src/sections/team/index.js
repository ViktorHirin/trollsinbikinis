import React from "react";
import TeamImage1 from "../../assets/img/team-img1.png";
import TeamImage2 from "../../assets/img/team-img2.png";
import TeamImage3 from "../../assets/img/team-img3.png";
import TeamImage4 from "../../assets/img/team-img4.png";
import BatmanImage from "../../assets/img/batcave.png";
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
            className="col-lg-4 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <img className="mb-2" src={TeamImage1} alt="TeamImage1" />
            <h4 className="font-weight-bold team-title">
              Christopher Moss  <br/> (Aka Batman)
              <span className="font-weight-normal d-block">
                
                <a href="https://qhiinc.com/batcave" target="_blank">
                  <img className="mb-2" src={BatmanImage} alt="Batman" />
                </a>
                
              </span>
            </h4>
            <p className="mb-0">
              Christopher Moss (Aka Batman), is an entrepreneneur who loves the NFT business, he spends most of his time in the Batcave.
            </p>
          </div>
          
          <div
            className="col-lg-4 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            <img className="mb-2" src={TeamImage3} alt="TeamImage3" />
            <h4 className="font-weight-bold team-title">
            Shaun Yeager
              <span className="font-weight-normal d-block">
              Marketing Genius
              </span>
            </h4>
            <p className="mb-0">
              Shaun Yeager is a marketing genius and no one can beat him at marketing
              strategies and management.
              I have been helping homeowners / businesses for over (20) years and I can't wait to help you!
            </p>
          </div>
          <div
            className="col-lg-4 text-center mb-lg-0 mb-4"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <img className="mb-2" src={TeamImage4} alt="TeamImage4" />
            <h4 className="font-weight-bold team-title">
              Viktor Hirin
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
