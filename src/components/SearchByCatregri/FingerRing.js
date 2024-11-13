import React from "react";

import spfOne from "../../../src/assets/images/products/pendants/banglesone.jpg";
import spfTwo from "../../../src/assets/images/products/pendants/banglestwo.jpg";
import spfThree from "../../../src/assets/images/products/pendants/banglesthree.png";
import spfFour from "../../../src/assets/images/products/pendants/banglesfour.jpg";
import Product from "../home/Products/Product";
import Heading from "../home/Products/Heading";

export const FingerRing = () => {
  return (
    <div className="w-full pb-20">
      <div className="py-4 text-center">
        <Heading heading="Finger Rings" />
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Manglesutra"
          price="24 ct"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Bangel"
          price="24 ct"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Nosepin"
          price="24 ct"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Necklace"
          price="24 ct"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};
