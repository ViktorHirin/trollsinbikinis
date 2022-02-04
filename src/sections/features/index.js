import React from "react";
import Feature1 from "../../assets/img/feature-icon1.png";
import Feature2 from "../../assets/img/feature-icon2.png";
import Feature3 from "../../assets/img/feature-icon3.png";
import Feature4 from "../../assets/img/feature-icon4.png";
import Feature5 from "../../assets/img/feature-icon5.png";
import Feature6 from "../../assets/img/feature-icon6.png";

const Index = () => {
  return (
    <section id="features" className="feature-part jumptarget">
      <div className="feature-bg py-6">
        <div className="container">
          <h2 className="main-title white center">
            What makes us stand out from the Rest?
          </h2>
          <p className="feature-para">
            The Cheetah Gang is undoubtedly distinctive. Here are some of the
            features that make us second to none.{" "}
          </p>
          <div className="row">
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature1} alt="featureIcon1" />
                <h4 className="feature-box-title mb-3">Fair Pricing</h4>
                <p className="feature-text mb-0">
                  The pricing of our NFT artwork is completely fair. Absolutely
                  no hidden charges at all.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature2} alt="featureIcon1" />
                <h4 className="feature-box-title mb-3">Ownership</h4>
                <p className="feature-text mb-0">
                  The owners of the Cheetah NFT will have full commercial
                  rights.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature3} alt="featureIcon3" />
                <h4 className="feature-box-title mb-3">Fair Distribution</h4>
                <p className="feature-text mb-0">
                  All Cheetah NFTs will be distributed fairly and without any
                  discrimination. We believe in giving equal chance to everyone.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature4} alt="featureIcon4" />
                <h4 className="feature-box-title mb-3">Artists </h4>
                <p className="feature-text mb-0">
                  All the Cheetah NFT artworks are created by artists using best
                  technology and with great precision.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature5} alt="featureIcon5" />
                <h4 className="feature-box-title mb-3">No Reserved NFT </h4>
                <p className="feature-text mb-0">
                  We believe in transparency. None of the NFT artwork is
                  reserved. They are 100% reserved for the public.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-box rounded-lg border border-light p-4">
                <img className="mb-3" src={Feature6} alt="featureIcon6" />
                <h4 className="feature-box-title mb-3">Charity </h4>
                <p className="feature-text mb-0">
                  5% of the income we make will be donated for animal welfare.
                  Join us and be a part of a good deed.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
