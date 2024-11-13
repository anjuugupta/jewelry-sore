import React from 'react';
import jewelryadone from '../../assets/images/products/pendants/braceletswomenone.jpg'
import jewelryadtwo from '../../assets/images/products/pendants/braceletswomentwo.jpg'

const JewelryAd = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-[#fdf8f5] p-8 lg:p-16">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src={jewelryadone} // Replace with your model image path
          alt="Model wearing jewelry"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left gap-2 px-10">
        <p className="text-[#ab7813] font-medium">Trendy Style</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          High Quality Jewel
        </h1>
        <p className="text-gray-600 mt-4">
          Suscipit tellus mauris a diam maecenas sed enim. In fermentum posuere urna nec tincidunt. Consectetur a erat nam at lectus.
        </p>
        <h2 className="text-2xl text-[#ab7813] font-semibold mt-6">
          Best Gift For Your Loved One
        </h2>
        <button className="mt-4 px-6 py-2 bg-[#ab7813] text-white font-semibold rounded-lg hover:bg-orange-500">
          Shop Now
        </button>
      </div>

      {/* Jewelry Image with Price */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
        <img
          src={jewelryadtwo} // Replace with your earrings image path
          alt="Gold Earring"
          className="w-1/2 h-auto object-cover"
        />
        <p className="text-[#ab7813] font-medium mt-4">Gold Ring</p>
        <p className="text-gray-800 text-lg font-semibold">24 ct</p>
      </div>
    </div>
  );
};

export default JewelryAd;
