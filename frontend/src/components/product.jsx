import React, { useState } from "react";
import clipVideo from "../assets/video/clip.mp4";
import ArrayImages from "./arrayImages";

function Product() {
  const [product, setProduct] = useState(null);

  const handleClick = () => {
    setProduct(clipVideo);
  };

  return (
    <div className="container">
      <div className="product">
        <ArrayImages />
        <video src={product} controls />
        <button type="button" onClick={handleClick}>
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Product;
