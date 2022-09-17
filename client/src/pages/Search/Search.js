import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Logo from "./assets/logo.png";
import Card from "./components/Card/Card";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pricefilter, setPricefilter] = useState(false);
  // const [below500filter, setBelow500filter] = useState(false);
  // const [above500filter, setAbove500filter] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/products");
      setProducts(data);
      setFilteredProducts(data);
      // Products.push(data);
    };
    fetchProducts();
  }, []);

  const filterPrice = (e, validator) => {
    console.log("inf u");
    const value = e.target.value;
    let Products = filteredProducts;
    if (validator) {
      if (value === "499") {
        const products_list = Products.filter(
          (item) => item.discount_price <= 499
        );
        console.log(products_list);
        setProducts(products_list);
      } else if (value === "500") {
        const products_list = Products.filter(
          (item) => item.discount_price >= 500
        );
        setProducts(products_list);
      }
    } else {
      setProducts(Products);
    }
  };

  return (
    <div>
      <div className="search-area">
        <div className="searchbar">
          <form>
            <input type="search" placeholder="Search" />
            <input type="button" value="Search" />
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
          <div className="search-filters">
            <div className="Brands-filter">
              <p style={{ fontSize: "24px" }}>BRAND</p>
              <div className="brands-list">
                <label>
                  <input type="checkbox" value="Armani" />
                  Armani
                </label>

                <label>
                  <input type="checkbox" value="Armani" />
                  HRX
                </label>

                <label>
                  <input type="checkbox" value="Armani" />
                  HnM
                </label>
              </div>
            </div>

            <hr />
            <div className="Price-filter">
              <p style={{ fontSize: "24px" }}>PRICE</p>
              <div className="price-list">
                <label>
                  <input
                    type="checkbox"
                    value="499"
                    onClick={async (e) => {
                      if (!pricefilter) {
                        setPricefilter(true);
                        filterPrice(e, true);
                      } else {
                        setPricefilter(false);
                        filterPrice(e, false);
                      }
                    }}
                  />{" "}
                  Under Rs. 500{" "}
                </label>

                <label>
                  <input
                    type="checkbox"
                    value="500"
                    onClick={async (e) => {
                      if (!pricefilter) {
                        setPricefilter(true);
                        filterPrice(e, true);
                      } else {
                        setPricefilter(false);
                        filterPrice(e, false);
                      }
                    }}
                  />{" "}
                  Rs. 500 - Rs. 3000
                </label>
              </div>
            </div>
            <hr />
            <div className="Ratings-filter">
              <p style={{ fontSize: "24px" }}>RATINGS</p>
              <div className="ratings-list">
                <label>
                  <input type="checkbox" value={5} />
                  ⭐⭐⭐⭐⭐
                </label>

                <label>
                  <input type="checkbox" value={4} />
                  ⭐⭐⭐⭐
                </label>

                <label>
                  <input type="checkbox" value={3} />
                  ⭐⭐⭐
                </label>

                <label>
                  <input type="checkbox" value={2} />
                  ⭐⭐
                </label>

                <label>
                  <input type="checkbox" value={1} />⭐
                </label>
              </div>
            </div>
          </div>
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
