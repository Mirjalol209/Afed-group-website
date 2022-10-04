import React from "react";
import "./index.css";
import Header from "..//../components/header/Header";
import Footer from "../../components/footer/Footer";
import offerMenuImg1 from "../../assets/images/offer-images/offer-product-1.png";
import offerMenuImg2 from "../../assets/images/offer-images/offer-product-2.png";

export const Offer = ()=> {
    return (
        <div className="offer__page">
          <Header />
          <div className="offer__banner wrapper">
            <div className="offer__banner__heading">
              <h1>Opportunity</h1>
            </div>
            <hr className="line" />
          </div>
          <div className="offer__banner__menu wrapper">
            <img src={offerMenuImg1}  height={"200px  "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
            <img src={offerMenuImg1} height={"200px "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
            <img src={offerMenuImg1} height={"200px "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
            <img src={offerMenuImg1} height={"200px "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
            <img src={offerMenuImg1} height={"200px "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
            <img src={offerMenuImg1} height={"200px "} alt="/" />
            <img src={offerMenuImg2} height={"200px "} alt="/" />
          </div>
          <Footer />
        </div>
      );
} 