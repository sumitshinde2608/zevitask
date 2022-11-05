import React, { useState, useEffect } from "react";
import "./Landing.css";
import Logo from "./assets/logo.png";
import Suggestions from "./components/Suggestions/Suggestions";
import { Link } from "react-router-dom";

// import SearchButton from "./search-button.png";

const Landing = () => {
  const [suggestionsDisplay, setSuggestionsDisplay] = useState(false);
  const [query, setQuery] = useState("");
  // const location = {
  //   pathname: "/search",
  //   state: {
  //     q: { query },
  //   },
  // };

  useEffect(() => {
    if (query.length === 0) {
      setSuggestionsDisplay(false);
    }
  }, [query]);
  return (
    <div className="main-container">
      <div className="head-nav">
        <img id="zevi-logo" src={Logo} alt="Logo" height="50px" width="100px" />
      </div>
      <div className="search-box">
        <div className="searchbar">
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={(event) => {
                setSuggestionsDisplay(true);
                setQuery(event.target.value);
              }}
            />
            <Link
              onClick={(event) => (!query ? event.preventDefault() : null)}
              to={`search/?q=${query}`}
            >
              <input type="button" value="Search" />
            </Link>
          </form>
        </div>

        <div className="suggestions">
          {suggestionsDisplay ? (
            <Suggestions displaySuggestions={true} query={query} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Landing;
