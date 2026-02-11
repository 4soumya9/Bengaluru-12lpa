import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

export const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [instock, setInstock] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        instock={instock}
        setInstock={setInstock}
      />
      <ProductTable
        products={PRODUCTS}
        searchText={searchText}
        instock={instock}
      />
    </div>
  );
}

export default App;
