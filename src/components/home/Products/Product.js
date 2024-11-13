import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => String(_id).toLowerCase().split(" ").join("");
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  return (
    <div className="w-full relative group">
      {/* Fixed-size image container */}
      <div className="w-full h-36 md:h-64 lg:h-72 relative overflow-hidden">
        {/* Product Image with fixed height and object-fit */}
        <Image
          className="w-full h-full object-cover"
          imgSrc={props.img}
          alt={props.productName}
        />

        {/* Badge */}
        {/* {props.badge && (
          <div className="absolute top-4 left-4">
            <Badge text="New" />
          </div>
        )} */}

        {/* Overlay with Actions */}
        <div className="absolute inset-x-0 bottom-0 bg-white transition-all duration-700 transform translate-y-full group-hover:translate-y-0 p-4">
          <ul className="space-y-2">
            {/* Add to Wishlist */}
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="flex items-center justify-end gap-2 text-gray-600 hover:text-primeColor text-sm cursor-pointer"
            >
              Add to Wish List
              <BsSuitHeartFill />
            </li>

            {/* View Details */}
            <li
              onClick={handleProductDetails}
              className="flex items-center justify-end gap-2 text-gray-600 hover:text-primeColor text-sm cursor-pointer"
            >
              View Details
              <MdOutlineLabelImportant className="text-lg" />
            </li>
          </ul>
        </div>
      </div>

      {/* Product Info */}
      <div className="border border-t-0 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-primeColor font-semibold text-lg sm:text-base md:text-lg lg:text-xl truncate">
            {props.productName}
          </h2>
          <p className="text-gray-600 text-sm sm:text-xs md:text-sm">{props.price}</p>
        </div>
        {/* <p className="text-gray-600 text-sm sm:text-xs md:text-sm truncate">{props.color}</p> */}
      </div>
    </div>
  );
};

export default Product;
