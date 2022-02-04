import React from "react";

import Logo from "../../assets/img/logo.svg";
import Discord from "../../assets/img/discord-icon.svg";

const Index = ({ account, loadWeb3 }) => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-dark navbar-expand-lg fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img src={Logo} alt="" />
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active js-scroll-trigger" href="#mint">
                    Mint
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#story">
                    The Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#milestones">
                    Milestones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav social-media mt-2 mt-sm-0">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="https://discord.com/invite/TheCheetahGang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Discord} alt="" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com/thecheetahgang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger font-weight-bold "
                    onClick={() => loadWeb3()}
                  >
                    {account
                      ? account.slice(0, 8) +
                        "..." +
                        account.slice(account.length - 5)
                      : "CONNECT"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="header"></div>
    </div>
  );
};

export default Index;
