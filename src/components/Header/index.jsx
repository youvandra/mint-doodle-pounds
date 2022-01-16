import React from "react";
import "./style.css";
import Pfp from "../../assets/image/1.gif";
import App from "../../App";

export default function Header() {
  return (
    <header className="masthead" data-aos="fade-up">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 ">
            <h1 className="t-shadow tittle">DoodlePound</h1>
            <p className="lead display-7 desc">
              DoodlePound is a collection of 999 uniquely generated dogs roaming
              around on the Solana blockchain.
            </p>
            <App />
          </div>
          <div className="col-md-6 text-center ">
            <img src={Pfp} alt="" className="img img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}
