import { useState } from "react";
import Check from "../../assets/img/number-check.png";
import MintImage from "../../assets/img/mint-logo.png";
import MintCheeta from "../../assets/img/mint-cheetah.png";

const Index = ({
  difference,
  account,
  totalSupply,
  displayPrice = 0,
  mint,
  maxSupply,
  chainId,
  loadWeb3,
}) => {
  const [value, setValue] = useState(0);

  const changeHandler = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      if (e.target.value === "" || e.target.value <= 7) {
        setValue(e.target.value);
      }
    }
  };

  const mintHandler = () => {
    mint(value);
  };

  return (
    <section id="mint" className="mint-part py-6 jumptarget">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 text-center mb-xl-0 mb-3" data-aos="fade-up">
            {difference > 0 ? (
              <Timer />
            ) : account ? (
              chainId === 1 ? (
                totalSupply !== 0 && totalSupply === maxSupply ? (
                  <Soldout />
                ) : (
                  <MintNowBox
                    displayPrice={displayPrice}
                    // mint={mint}
                    mintHandler={mintHandler}
                    totalSupply={totalSupply}
                    value={value}
                    changeHandler={changeHandler}
                    maxSupply={maxSupply}
                  />
                )
              ) : (
                <MintBox msg={"Please Connect To Mainnet"} />
              )
            ) : (
              <MintBox connect={true} loadWeb3={loadWeb3} />
            )}
          </div>
          <div className="col-xl-6" data-aos="fade-up">
            <div className="numbers-main">
              <h2>The Numbers</h2>
              <ul className="list-unstyled number-list mb-0">
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Mint Cost :{" "}
                  <strong>
                   0.04 ETH + GAS
                  </strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Max Supply : <strong>10,000</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Max Mint Per Order : <strong>7 NFT</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Presale Supply : <strong>9950</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Giveaway Supply : <strong>50 (reserved for contest)</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Royalty Fees : <strong>3%</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  Token Type : <strong>ERC-721</strong>
                </li>
                <li>
                  <img className="mr-2" src={Check} alt="cheak" />
                  File Hosting : <strong>IPFS</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

const Timer = () => (
  <div className="border border-dark p-3 timer-main">
    <h2>
      The Cheetah Gang is <span className="text-warning">Coming</span>
    </h2>
    <p>
      OCTOBER 20TH 1:00 PM UTC
      <br />
      PRE-SALE STARTS IN
    </p>
    <div id="flipdown" className="flipdown"></div>
  </div>
);

const MintBox = ({ msg = "Connect", connect, loadWeb3 }) => (
  <div className="mint-now-box">
    <div className="mint-header">
      <div className="mint-header-text">
        <h3 className="mint-box-title">Join The Cheetah Gang</h3>
        <p className="mb-0 mint-box-para">
          Enter the amount of cheetah you would like to purchase.
        </p>
      </div>
      <div className="mint-box-logo">
        <img src={MintImage} alt="mintbox" />
      </div>
    </div>
    <div className="mint-box-body text-center py-0">
      {connect ? (
        <button
          className="btn btn-outline-light btn-lg my-5 rounded-pill mint-btn py-3 px-5"
          onClick={loadWeb3}
        >
          {msg}
        </button>
      ) : (
        <button className="btn btn-outline-light btn-lg my-5 rounded-pill mint-btn py-3 px-5">
          {msg}
        </button>
      )}
    </div>
  </div>
);

const MintNowBox = ({
  displayPrice,
  totalSupply,
  value,
  changeHandler,
  maxSupply,
  mintHandler,
}) => (
  <div className="mint-now-box">
    <div className="mint-header">
      <div className="mint-header-text">
        <h3 className="mint-box-title">Join The Cheetah Gang</h3>
        <p className="mb-0 mint-box-para">
          Enter the amount of cheetah you would like to purchase.
        </p>
      </div>
      <div className="mint-box-logo">
        <img src={MintImage} alt="" />
      </div>
    </div>
    <div className="mint-box-body text-center">
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className="price-box">
            <img src={MintCheeta} alt="mint-cheetha" />
            <div className="price-text-box text-right">
              <h5 className="price-text">Price per Cheetah</h5>
              <h4 className="price-tag">
                <span className="text-danger">{displayPrice}</span> ETH Each
              </h4>
              <h5 className="price-text mb-0">
                {maxSupply-totalSupply} remaining
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-5 pl-0 pl-md-3 mt-3 mt-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="number"
              max={7}
              value={value}
              onChange={changeHandler}
            />
            <div className="input-group-append">
              <button className="btn" type="button">
                7 max
              </button>
            </div>
          </div>
          <span className="total-box">
            Total <strong>{(displayPrice * value).toFixed(3)} ETH</strong>
          </span>
        </div>
      </div>
      <button
        className="btn btn-outline-light mt-3 rounded-pill mint-btn"
        type="button"
        onClick={mintHandler}
      >
        Mint Now
      </button>
    </div>
  </div>
);

const Soldout = () => (
  <div className="sold-box text-center bg-danger p-4">
    <h1 className="display-3 text-white">
      Sold out!
      <br />
    </h1>
    <p className="text-white" style={{ fontSize: "24px" }}>
      Our entire collection is sold out! Visit OpenSea to check our collection.
      <br />
    </p>
    <button className="btn btn-outline-light rounded-pill mint-btn mb-3">
      NFT Collection
      <br />
    </button>
  </div>
);
