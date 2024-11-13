import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import FullScreenVideoSection from "../FullScreenVideoSection/FullScreenVideoSection";
import JewelryHeroSection from "../JewelryHeroSection/JewelryHeroSection";
import JewelryAd from "../../components/JewelryAd/JewelryAd";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <Sale />
          <JewelryHeroSection />
          <NewArrivals />
          <JewelryAd/>
          <BestSellers />
          <YearProduct />
          <SpecialOffers />
          <FullScreenVideoSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
