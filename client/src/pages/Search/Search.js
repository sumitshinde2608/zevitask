import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Logo from "./assets/logo.png";
import Card from "./components/Card/Card";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pricefilter, setPricefilter] = useState(false);
  const [ratingfilter, setRatingfilter] = useState(false);
  const [brandfilter, setBrandfilter] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://ev1caq100pghbac8errci7hhla23.requestly.me/products"
      );
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  //Price Filter
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

  //ratings filter
  const filterRating = (e, validator) => {
    const value = e.target.value;
    let Products = filteredProducts;

    if (validator) {
      const products_list = Products.filter(
        (item) => item.rating === parseInt(value)
      );
      setProducts(products_list);
      // }
    } else {
      setProducts(Products);
    }
  };

  //brands filter
  const filterBrands = (e, validator) => {
    const value = e.target.value;
    let Products = filteredProducts;
    if (validator) {
      const products_list = Products.filter((item) => item.brand === value);
      setProducts(products_list);
      // }
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
                  <input
                    type="radio"
                    name="filters"
                    value="Apple"
                    onClick={(e) => {
                      setProducts(filteredProducts);
                    }}
                  />{" "}
                  All
                </label>
                <label>
                  <input
                    type="radio"
                    value="Armani"
                    name="filters"
                    onClick={async (e) => {
                      if (!brandfilter) {
                        filterBrands(e, true);
                      }
                    }}
                  />
                  Armani
                </label>

                <label>
                  <input
                    type="radio"
                    value="HRX"
                    name="filters"
                    onClick={async (e) => {
                      if (!brandfilter) {
                        filterBrands(e, true);
                      }
                    }}
                  />
                  HRX
                </label>

                <label>
                  <input
                    type="radio"
                    value="HnM"
                    name="filters"
                    onClick={async (e) => {
                      if (!brandfilter) {
                        filterBrands(e, true);
                      }
                    }}
                  />
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
                    type="radio"
                    value="499"
                    name="filters"
                    onClick={async (e) => {
                      if (!pricefilter) {
                        // setPricefilter(true);
                        filterPrice(e, true);
                      }
                    }}
                  />{" "}
                  Under Rs. 500{" "}
                </label>

                <label>
                  <input
                    type="radio"
                    value="500"
                    name="filters"
                    onClick={async (e) => {
                      if (!pricefilter) {
                        // setPricefilter(true);
                        filterPrice(e, true);
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
                  <input
                    type="radio"
                    value="5"
                    name="filters"
                    onClick={(e) => {
                      if (!ratingfilter) {
                        // setRatingfilter(true);
                        filterRating(e, true);
                      }
                    }}
                  />
                  ⭐⭐⭐⭐⭐
                </label>

                <label>
                  <input
                    type="radio"
                    value="4"
                    name="filters"
                    onClick={(e) => {
                      if (!ratingfilter) {
                        filterRating(e, true);
                      }
                    }}
                  />
                  ⭐⭐⭐⭐
                </label>

                <label>
                  <input
                    type="radio"
                    value="3"
                    name="filters"
                    onClick={(e) => {
                      if (!ratingfilter) {
                        filterRating(e, true);
                      }
                    }}
                  />
                  ⭐⭐⭐
                </label>

                <label>
                  <input
                    type="radio"
                    value="2"
                    name="filters"
                    onClick={(e) => {
                      if (!ratingfilter) {
                        filterRating(e, true);
                      }
                    }}
                  />
                  ⭐⭐
                </label>

                <label>
                  <input
                    type="radio"
                    value="1"
                    name="filters"
                    onClick={(e) => {
                      if (!ratingfilter) {
                        filterRating(e, true);
                      }
                    }}
                  />
                  ⭐
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
