import React from "react";
import Rarirt1 from "../../assets/img/rarity-1.jpg";
import Rarirt2 from "../../assets/img/rarity-2.jpg";
import Rarirt3 from "../../assets/img/rarity-3.jpg";
import Rarirt4 from "../../assets/img/rarity-4.jpg";
import Rarirt5 from "../../assets/img/rarity-5.jpg";
import Rarirt6 from "../../assets/img/rarity-6.jpg";
import Rarirt7 from "../../assets/img/rarity-7.jpg";
import Rarirt8 from "../../assets/img/rarity-8.jpg";
import Rarirt from "../../assets/img/rarity.jpg";

const Index = () => {
  return (
    <section className="py-6 rarity-part jumptarget">
      <div className="container">
        <h2 className="main-title center">Rarity</h2>
        <p className="rarity-para">
          The Cheetah Gang is one of its kind. We are different and unique. The
          rarity of our NFT is that we have used 150 traits in our Cheetah
          artwork. Check below to see the distinctive qualities of our artwork.
        </p>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center">
            <div className="row">
              <div className="col-6 mb-4 text-center">
                <img
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
              Cheetah
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">8</span>
              Earring
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">18</span>
              Background
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">46</span>
              Clothes
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">15</span>
              Body
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">33</span>
              Eyes / Eyewear
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">24</span>
              Hat / Hair
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">25</span>
              Mouth
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">4</span>
              Mask
            </li>
            <li className="list-inline-item">
              <span className="d-block text-warning font-weight-bold">5</span>
              Nose
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
