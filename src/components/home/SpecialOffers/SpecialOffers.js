import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import spfOne from "../../../assets/images/products/pendants/Mangalsutraone.jpg";
import spfTwo from "../../../assets/images/products/pendants/banglesone.jpg";
import spfThree from "../../../assets/images/products/pendants/nosepinthree.jpg";
import spfFour from "../../../assets/images/products/pendants/necklacetwo.jpg";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20 ">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-7 ">
        <Link to={`/mangalsutra`}>
          <Product
            _id="1101"
            img={spfOne}
            productName="Manglesutra"
            price="24"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
        <Link to={`/bangles`}>
          <Product
            _id="1102"
            img={spfTwo}
            productName="Bangel"
            price="24"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
        <Link to={`/nosepin`}>
          <Product
            _id="1103"
            img={spfThree}
            productName="Nosepin"
            price="24"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
        <Link to={`/necklace`}>
          <Product
            _id="1104"
            img={spfFour}
            productName="Necklace"
            price="24"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </Link>
      </div>
    </div>
  );
};

export default SpecialOffers;
