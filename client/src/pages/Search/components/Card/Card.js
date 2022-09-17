import React from "react";
import "./Card.css";

// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Card = ({ id, name, price, dprice, product_image, rating }) => {
  return (
    <div className="card-layout">
      <div className="card-image">
        <img src={product_image} className="product-image" alt="product" />
        <Checkbox
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon style={{ color: "red" }} />}
          className="fav-icon"
        />
        <div className="overlay">View Product</div>
      </div>

      <p id="product-name">{name}</p>
      <div style={{ display: "inline-block" }}>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "20px",
            color: "gray",
            opacity: "0.7",
          }}
        >
          Rs. {price}{" "}
        </span>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "blue",
            opacity: "0.6",
          }}
        >
          {"  "}
          Rs. {dprice}
        </span>
      </div>

      <div className="ratings">
        {
          // map for ratings
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
      </div>
    </div>
  );
};

export default Card;
