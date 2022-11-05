import React from "react";
import "./Card.css";

const Card = ({ BRAND_NAME, BASEPACK_DESC_CLEAN, BASEPACK_CODE }) => {
  return (
    <div>
      <div className="card-body">
        <div className="score">Vendor: {BRAND_NAME}</div>
        <h5 className="card-title">{BASEPACK_DESC_CLEAN}</h5>
        <div className="code">Code: {BASEPACK_CODE}</div>
      </div>
    </div>
  );
};

export default Card;
