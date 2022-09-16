import React, { useState } from "react";
import "./Landing.css";
import Logo from "./assets/logo.png";
import Suggestions from "./components/Suggestions/Suggestions";

// import SearchButton from "./search-button.png";

const Landing = () => {
  const [suggestionsDisplay, setSuggestionsDisplay] = useState(false);
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
              onFocus={() => {
                setSuggestionsDisplay("block");
              }}
            />
            <a href="/search">
              <input
                type="button"
                value="Search"
                // onClick={() => {
                //   console.log("clicked");
                // }}
              />
            </a>
            {/* </input> */}
          </form>
        </div>

        <div className="suggestions">
          {suggestionsDisplay ? <Suggestions props={true} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Landing;
