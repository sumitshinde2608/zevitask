import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Logo from "./assets/logo.png";
import Card from "./components/Card/Card";

export const Search = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="search-area">
        <div className="searchbar">
          <form>
            <input type="search" placeholder="Search" />
            <input
              type="button"
              value="Search"
              // onClick={() => {
              //   console.log("clicked");
              // }}
            />
            {/* </input> */}
          </form>
        </div>
        <div>
          <img
            id="zevi-logo"
            src={Logo}
            alt="Logo"
            height="50px"
            width="100px"
          />
        </div>
      </div>

      <div className="results">
        <div style={{ paddingLeft: "40px" }}>
          <h1>Search Results</h1>
        </div>
        <div className="results-area">
          <div className="search-filters">Search</div>
          <div className="search-results">
            {products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                price={product.original_price}
                dprice={product.discount_price}
                product_image={product.product_image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
