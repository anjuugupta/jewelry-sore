import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    uniqueID: "",
    image: "",
    termsAccepted: false,
    likedProductID: "",  
  });

  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  // Form handling
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const cartDetails = products.map(({ name, price, quantity }) => ({
      name,
      price,
      quantity,
    }));
  
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("uniqueID", formData.uniqueID);
    formDataObj.append("likedProductID", formData.likedProductID);
    formDataObj.append("termsAccepted", formData.termsAccepted);
    formDataObj.append("image", formData.image);
    formDataObj.append("cart", JSON.stringify(cartDetails));
  
    try {
      const response = await fetch("http://localhost:8000/submit", {
        method: "POST",
        body: formDataObj,
      });
  
      if (response.ok) {
        alert("Form submitted successfully! Check your email for confirmation.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          uniqueID: "",
          image: "",
          termsAccepted: false,
          likedProductID: "",
        });
        dispatch(resetCart());
      } else {
        const { message } = await response.json();
        alert(`Failed to submit the form: ${message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting the form. Please try again.");
    }
  };
  
  
  
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2 className="col-span-2">Price</h2>
            <h2>Quantity</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
                {/* Display the unique ID for each product */}
                <p className="text-sm text-gray-600">
                  Product Unique ID: <span className="font-bold">{item.uniqueID}</span>
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-yellow-500 text-white font-semibold uppercase mb-4 hover:bg-yellow-300 duration-300"
          >
            Reset cart
          </button>

          {/* Form Section */}
          <div className="border p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">User Information</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email ID:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
             
              
              <div className="flex flex-col">
                <label htmlFor="image">Upload Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="termsAccepted">I agree to the terms and conditions</label>
              </div>
              <button
                type="submit"
                className="bg-primeColor text-white px-4 py-2 rounded hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>

         
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col items-center pb-20"
        >
          <img className="w-2/3 md:w-1/3 lg:w-1/4" src={emptyCart} alt="emptyCartImg" />
          <p className="text-xl text-gray-600 font-titleFont font-semibold pt-4">
            Your cart is empty. Please add products.
          </p>
          <Link to="/">
            <button className="mt-8 w-96 bg-primeColor text-white text-sm hover:bg-black duration-300 px-6 py-3">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
