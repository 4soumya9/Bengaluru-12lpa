import React from "react";

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}> {product.name}</span>
  );
 
  // td = Table Data
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  );
};

export default ProductRow;
