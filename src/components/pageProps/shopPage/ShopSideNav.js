import React from "react";
import Category from "./shopBy/Category";
import Price from "./shopBy/Price";

const ShopSideNav = ({ onCategorySelect }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category onCategorySelect={onCategorySelect} />
      <Price />
    </div>
  );
};

export default ShopSideNav;
