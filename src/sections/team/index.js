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
          <strong>Meet the movers and shakers behind TrollsInBikinis - TIB</strong>
        </h2>
        <p className="rarity-para">
          TrollsInBikinis ( TIB ) was established by a squad that are devoted to NFTs.
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
              Christopher <br/> (Aka Batman)
              <span className="font-weight-normal d-block">
                <a href="https://qhiinc.com/batcave" target="_blank">
                  <img className="mb-2" src={BatmanImage} alt="Batman" />
                </a>       
              </span>
            </h4>
            <p className="mb-0">
            Christopher (Aka Batman), is an entrepreneur who loves the NFT business and he spends most of his time in his Batcave. 
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
            Secreto
              <span className="font-weight-normal d-block">
              Marketing Genius
              </span>
            </h4>
            <p className="mb-0">
            Secreto is a major producer of TIB NFT's and his goal is to one day take over the world.
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
              Viktor
              <span className="font-weight-normal d-block">Coding Freak</span>
            </h4>
            <p className="mb-0">
            Pro-coder and programming wizard with years of experience in multiple operating systems and methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
