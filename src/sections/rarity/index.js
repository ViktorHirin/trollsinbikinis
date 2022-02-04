import React from "react";
import Rarirt1 from "../../assets/img/rarity-1.png";
import Rarirt2 from "../../assets/img/rarity-2.png";
import Rarirt3 from "../../assets/img/rarity-3.png";
import Rarirt4 from "../../assets/img/rarity-4.png";
import Rarirt5 from "../../assets/img/rarity-5.png";
import Rarirt6 from "../../assets/img/rarity-6.png";
import Rarirt7 from "../../assets/img/rarity-7.png";
import Rarirt8 from "../../assets/img/rarity-8.png";
import Rarirt from "../../assets/img/rarity.png";

const Index = () => {
  return (
    <section className="py-6 rarity-part jumptarget">
      <div className="container">
        <h2 className="main-title center">Rarity</h2>
        <p className="rarity-para">
          The Trollsinbikinis is one of its kind. We are different and unique. The
          rarity of our NFT is that we have used 150 traits in our Trollsinbikinis
          artwork. Check below to see the distinctive qualities of our artwork.
        </p>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center">
            <div className="row">
              <div className="col-6 mb-4 text-center">
                <img
                  sizes="160"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  src={Rarirt1}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 mb-4 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  src={Rarirt2}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  src={Rarirt3}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  src={Rarirt4}
                  alt="rarirtyimages"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center my-lg-0 my-3">
            <img
              data-aos="zoom-in"
              data-aos-delay="350"
              src={Rarirt}
              alt="rarirtyimages"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4 text-center">
            <div className="row">
              <div className="col-6 mb-4 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  src={Rarirt5}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 mb-4 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  src={Rarirt6}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  src={Rarirt7}
                  alt="rarirtyimages"
                />
              </div>
              <div className="col-6 text-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  src={Rarirt8}
                  alt="rarirtyimages"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="rarity-info border border-warning mt-5 bg-white py-4"
        >
          <ul className="list-inline m-0">
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">
                10000
              </span>
              Troll
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">10</span>
              Bikinis
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">13</span>
              Background
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">2</span>
              Earring
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">11</span>
              HandStuff
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">10</span>
              Mouse
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">11</span>
              Eyes
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">11</span>
              Hat
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
