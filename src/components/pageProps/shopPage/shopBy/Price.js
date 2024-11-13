import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    // {
    //   _id: 950,
    //   priceOne: "9k",
    //   // priceTwo: 49.99,
    // },
    // {
    //   _id: 951,
    //   priceOne: "14k",
    //   // priceTwo: 99.99,
    // },
    // {
    //   _id: 952,
    //   priceOne: "18k",
    //   // priceTwo: 199.99,
    // },
    // {
    //   _id: 953,
    //   priceOne: "21k",
    //   // priceTwo: 399.99,
    // },
    {
      _id: 954,
      priceOne: "22k",
      // priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: "23k",
      // priceTwo: 1000.0,
    },
    {
      _id: 956,
      priceOne: "24k",
      // priceTwo: 1000.0,

    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Carat" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
            {item.priceOne} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
