import React from "react";

const ProductCategoryRow = ({ products, searchText, instock }) => {
  const rows = [];
  const lastCategory = null;
  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(searchText.toLowerCase())) {
      return;
    }
    if (instock && !product.stocked) {
      return;
    }
    if(product.category )
  });
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default ProductCategoryRow;
