import React from "react";
import "./Landing.css";
import Logo from "./assets/logo.png";
// import SearchButton from "./search-button.png";

const Landing = () => {
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
                console.log("focused");
              }}
            />
            <input
              type="button"
              value="Search"
              onClick={() => {
                console.log("clicked");
              }}
            />
            {/* </input> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
