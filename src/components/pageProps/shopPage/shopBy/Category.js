import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { Link } from "react-router-dom";

const Category = ({ onCategorySelect }) => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    { _id: 990, title: "New Arrivals", Link:''},
    { _id: 991, title: "Earrings", Link:'earring' },
    { _id: 992, title: "Pendants", Link:'pendant' },
    { _id: 993, title: "Finger Rings" },
    { _id: 994, title: "Mangalsutra" },
    { _id: 995, title: "Chains" },
    { _id: 996, title: "Nose Pin" },
    { _id: 997, title: "Necklaces" },
    { _id: 998, title: "Necklace Set" },
    { _id: 999, title: "Bangles" },
    { _id: 1000, title: "Bracelets" },
    { _id: 10001, title: "Pendants & Earring Set" },
  ];

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title }) => (
            <li
              key={_id}
              onClick={() => onCategorySelect(title)} 
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between cursor-pointer"
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
