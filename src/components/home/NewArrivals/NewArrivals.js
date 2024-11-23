import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import newArrOne from "../../../assets/images/products/pendants/pendantone.jpg";
import newArrTwo from "../../../assets/images/products/pendants/banglestwo.jpg";
import newArrThree from "../../../assets/images/products/pendants/chainwomenone.jpg";
import newArrFour from "../../../assets/images/products/pendants/chainmentwo.jpg";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Link to={`/pendants`}>
            <Product
              _id="100001"
              img={newArrOne}
              productName="Pendant"
              price="24"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </Link>
        </div>
        <div className="px-2">
          <Link to={`/bangles`}>
            <Product
              _id="100002"
              img={newArrTwo}
              productName="Bangle"
              price="24"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </Link>
        </div>
        <div className="px-2">
          <Link to={`/chains`}>
            <Product
              _id="100003"
              img={newArrThree}
              productName="Chain for Women"
              price="24"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </Link>
        </div>
        <div className="px-2">
          <Link to={`/chains`}>
            <Product
              _id="100004"
              img={newArrFour}
              productName="Chain for Men"
              price="24"
              badge={false}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </Link>
        </div>
        <div className="px-2">
          <Link to={`/chains`}>
            <Product
              _id="100005"
              img={newArrTwo}
              productName="Custom Chain"
              price="24"
              badge={false}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
