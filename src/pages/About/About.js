import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import JewelryHeroSection from "../JewelryHeroSection/JewelryHeroSection";
import JewelryAd from "../../components/JewelryAd/JewelryAd";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <JewelryHeroSection />
        <JewelryAd />
        <Link to="/shop">
          <div className="py-10 text-center">
            <button className="w-52 h-10 bg-[#ab7813]  text-white hover:bg-[#ab7814] duration-300">
              Continue Shopping
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
