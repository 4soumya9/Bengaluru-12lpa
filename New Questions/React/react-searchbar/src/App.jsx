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
  const [searchText, setSearchText] = useState("");
  const [instockonly, setInstockonly] = useState(false);

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        instockonly={instockonly}
        setInstockonly={setInstockonly}
      />
      <ProductTable
        products={PRODUCTS}
        searchText={searchText}
        instockonly={instockonly}
      />
    </div>
  );
}

export default App;
