import React from "react";
import productsData from "../../../data/productsData.js";

const ProductList = ({ itemsPerPage, selectedCategory }) => {
  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? productsData.filter(product => product.category === selectedCategory)
    : productsData;

  return (
    <div className="product-list">
      {filteredProducts.slice(0, itemsPerPage).map(product => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {/* Other product details */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
