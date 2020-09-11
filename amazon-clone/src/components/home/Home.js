import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="10’’ LED Ring Light with Stand and Phone Holder, UBeesize Selfie Halo Light for Photography/Makeup/Vlogging/Live Streaming"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61%2B58es8xuL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner"
            price="219.00"
            image="https://images-na.ssl-images-amazon.com/images/I/51UsTTP3H9L._AC_SL1100_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Netac 128GB Micro SD Card, microSDXC UHS-I Memory Card - 100MB/s, 667X, U3, Class10, Full HD Video V30, A1, FAT32, High Speed Flash TF Card P500 for Smartphone/Bluetooth Speaker/Tablet/PC/Camera"
            price="18.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61reR1Z5yAL._AC_SL1430_.jpg"
            rating={5}
          />
          <Product
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
            rating={4}
          />
          <Product
            title="CAP Barbell 2-Inch Olympic Grip Plate, Various Sizes"
            price="65.50"
            image="https://images-na.ssl-images-amazon.com/images/I/91-4PArB%2BvL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
            price="549.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
