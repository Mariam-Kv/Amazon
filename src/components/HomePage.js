import React from "react";
import "../css/Home.css";
import Product from "./Product";
function HomePage() {
  return (
    <>
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
          className="home__image "
        />
      </div>
      <div className="home__row">
        <Product id="1" title="dsdf" image="dfdf" price="2" rating="fgfg" />
        <Product id="2" price="2" />
        <Product id="3" price="2" />

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default HomePage;