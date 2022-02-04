import React from "react";
import "./style.css";
import Header from "../header";
import Footer from "../footer";
const Index = ({ children, account, loadWeb3, totalSupply, maxSupply }) => {
  return (
    <div>
      <Header account={account} loadWeb3={loadWeb3} />
      <main>{children}</main>
      <Footer maxSupply={maxSupply} totalSupply={totalSupply} />
    </div>
  );
};

export default Index;
