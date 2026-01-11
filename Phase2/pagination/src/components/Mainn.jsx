import { useEffect, useState } from "react";
// import "./App.css";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";

function Mainn() {
  const [products, setProducts] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const page_size = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / page_size);
  const start = currentpage * page_size;
  const end = start + page_size;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const res = await data.json();
    setProducts(res.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (n) => {
    setCurrentpage(n);
  };

  const next = () => {
    setCurrentpage((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentpage((prev) => prev - 1);
  };
  return (
    <div>
      <h3>pagiantion</h3>
      {!products.length ? (
        <h1>No product</h1>
      ) : (
        <div>
          <Pagination
            next={next}
            prev={prev}
            currentpage={currentpage}
            noOfPages={noOfPages}
            gotoPage={handlePageChange}
          />
          <div>
            {products.slice(start, end).map((p) => (
              <ProductCard key={p.id} title={p.title} image={p.thumbnail} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainn;
