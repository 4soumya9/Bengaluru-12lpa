import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, searchText, instockonly }) => {
  const row = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(searchText.toLowerCase())) {
      return;
    }
    if (instockonly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
      lastCategory = product.category;
    }
    row.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <div>
      <h1>ProductTable</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
