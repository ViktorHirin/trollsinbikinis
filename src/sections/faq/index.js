import React from "react";

const Index = () => {
  return (
    <section id="faq" className="faq-part py-6 bg-dark jumptarget">
      <div className="container">
        <h2 data-aos="fade" className="main-title center white">
          <strong>FAQ</strong>
        </h2>
        <div role="tablist" id="accordion">
          <div className="card" data-aos="fade-up">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion .item-1"
                  href="#accordion .item-1"
                  className="btn-block"
                >
                  How many TIB NFT’s will exist?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse show item-1"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  There will be 10,000 TIB NFT's on the Ethereum Blockchain.
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-2"
                  href="#accordion .item-2"
                  className="btn-block"
                >
                  How much will one TrollsInBikinis NFT cost?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-2"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  The price of one TrollsInBikinis will be 0.04 MATIC + GAS Fees
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-3"
                  href="#accordion .item-3"
                  className="btn-block"
                >
                  How many TIB NFT's can I own?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-3"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  Seven TIB NFT's can be purchased per address.
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-4"
                  href="#accordion .item-4"
                  className="btn-block"
                >
                  Which Ethereum wallets can I use for the mint?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-4"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">We support MetaMask wallet.</p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="400">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-5"
                  href="#accordion .item-5"
                  className="btn-block"
                >
                  How do I sell my NFTs?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-5"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  TrollsInBikinis will be listed on OpenSea once the sale is
                  over.
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="500">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-6"
                  href="#accordion .item-6"
                  className="btn-block"
                >
                  Where can I see my TrollsInBikinis once I've purchased
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-6"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  You can see it on MetaMask or your OpenSea profile.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="card" data-aos="fade-up" data-aos-delay="600">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-7"
                  href="#accordion .item-7"
                  className="btn-block"
                >
                  How much will be the resale royalties?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-7"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  3% royalty will be applicable on the resales.
                </p>
              </div>
            </div>
          </div> */}
          <div className="card" data-aos="fade-up" data-aos-delay="700">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-8"
                  href="#accordion .item-8"
                  className="btn-block"
                >
                  How can I contact the Team?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-8"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">
                  The best way to contact the Team is through email @ info@trollsinbikinis.com.
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="800">
            <div className="card-header" role="tab">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="accordion .item-9"
                  href="#accordion .item-9"
                  className="btn-block"
                >
                  When is the drop/sale date?
                  <i className="fas fa-plus float-right"></i>
                </a>
              </h5>
            </div>
            <div
              className="collapse item-9"
              role="tabpanel"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p className="card-text">?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
