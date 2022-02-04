/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import FtrLogo from "../../assets/img/ftr-logo.svg";
import DiscordIcon from "../../assets/img/discord-icon.svg";
import OpenSea from "../../assets/img/opensea.svg";
const Index = ({ totalSupply, maxSupply }) => {
  return (
    <footer className="footer-part text-center">
      <div className="container">
        <div>
          <img src={FtrLogo} alt="ftrLogo" />
        </div>
        <div className="border-top border-bottom py-2 my-4">
          <ul className="list-inline m-0 ftr-link">
            <li className="list-inline-item">
              <a
                className="btn"
                href="https://discord.com/invite/TheCheetahGang"
                target="_blank"
                rel="noreferrer"
              >
                <img className="mr-2" src={DiscordIcon} alt="discord" />
                Join Our Discord
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn"
                href="https://twitter.com/thecheetahgang"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter mr-2"></i>Join Our Twitter
              </a>
            </li>
            {totalSupply && totalSupply === maxSupply ? (
              <li class="list-inline-item">
                <a class="btn" href="#">
                  <img class="mr-2" src={OpenSea} alt="" />
                  Buy On OpenSea
                </a>
              </li>
            ) : null}
            {/* <!-- <li className="list-inline-item"><a className="btn" href="#"><img className="mr-2" src="assets/img/opensea.png"/>Buy On OpenSea</a></li> --> */}
          </ul>
        </div>
        <p>Copyright © 2021 The Cheetah Gang. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Index;
