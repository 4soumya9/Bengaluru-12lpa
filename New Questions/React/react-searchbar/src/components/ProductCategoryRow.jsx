import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <div>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </div>
  );
};

export default ProductCategoryRow;
