import React from "react";
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  const { imageUrl } = useParams();

  return (
    <div className="image-detail">
      <img src={imageUrl} alt="Pic Details" />
    </div>
  );
};

export default ImageDetail;
