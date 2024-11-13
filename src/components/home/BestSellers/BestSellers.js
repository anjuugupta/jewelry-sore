import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import bestSellerOne from "../../../assets/images/products/bestSeller/15.jpg";
import bestSellerTwo from "../../../assets/images/products/bestSeller/8.jpg";
import bestSellerThree from "../../../assets/images/products/bestSeller/6.jpg";
import bestSellerFour from "../../../assets/images/products/bestSeller/49.jpg";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
        <Link to={`/necklace`}>
          <Product
            _id="1011"
            img={bestSellerOne}
            productName="Necklace"
            price="24 ct"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
        <Link to={`/nosepin`}>
          <Product
            _id="1012"
            img={bestSellerTwo}
            productName="Nose Pin"
            price="24 ct"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Chain"
          price="24 ct"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Link to={`/ring`}>
          <Product
            _id="1014"
            img={bestSellerFour}
            productName="Ring"
            price="24 ct "
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
