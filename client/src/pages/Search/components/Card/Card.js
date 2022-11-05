import React from "react";
import "./Card.css";

const Card = ({ BRAND_NAME, BASEPACK_DESC_CLEAN, BASEPACK_CODE }) => {
  return (
    <div className="card-body">
      <div className="score">Vendor: {BRAND_NAME}</div>
      <div className="card-title">{BASEPACK_DESC_CLEAN}</div>
      <div className="code">Code: {BASEPACK_CODE}</div>
    </div>
  );
};

export default Card;
