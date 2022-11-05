import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Logo from "./assets/logo.png";
import Card from "./components/Card/Card";
import { useLocation } from "react-router-dom";
import Suggestions from "../Landing/components/Suggestions/Suggestions";

export const Search = () => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestionsDisplay, setSuggestionsDisplay] = useState(false);
  const location = useLocation();
  // console.log("L-> ", location.search);

  // console.log("q->", location.search.slice(3));
  const [query, setQuery] = useState(location.search.slice(3));
  const [newQuery, setNewQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios.get(
        `https://staging.search.zevi.in/search/?store=hulpoc&rank=True&q=${query}`
      );
      setProducts(data.data.ranked_list);
      // console.log(data.data.ranked_list);
      // setFilteredProducts(data);
    };
    fetchProducts();
  }, [query]);

  useEffect(() => {
    if (newQuery.length === 0) {
      setSuggestionsDisplay(false);
    }
  }, [newQuery]);

  return (
    <div>
      <div className="search-area">
        <div className="searchbar-search">
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setNewQuery(e.target.value);
                setSuggestionsDisplay(true);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  console.log("here->", newQuery);
                  setQuery(newQuery);
                  setSuggestionsDisplay(false);
                }
              }}
              defaultValue={query.replace(/%20/g, " ")}
            />
            <input
              type="button"
              value="Search"
              onClick={() => {
                setQuery(newQuery);
                setSuggestionsDisplay(false);
              }}
            />
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
      <div className="suggestions">
        {suggestionsDisplay ? (
          <Suggestions displaySuggestions={true} query={newQuery} />
        ) : null}
      </div>

      <div className="container">
        <div className="results-area">
          <div className="search-results">
            {products?.map((product) => (
              <Card
                BRAND_NAME={product.BRAND_NAME}
                BASEPACK_DESC_CLEAN={product.BASEPACK_DESC_CLEAN}
                BASEPACK_CODE={product.BASEPACK_CODE}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
