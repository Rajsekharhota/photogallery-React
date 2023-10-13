import React, { useContext } from "react";
import { allImagesContext } from "../Api/ImageContext";

const ImageGallery = ({ searchImg }) => {
  const { imgData } = useContext(allImagesContext);

  const filteredImages = imgData.filter((image) =>
    image.tags.toLowerCase().includes(searchImg.toLowerCase())
  );

  return (
    <div className="image-gallery">
      {filteredImages.map((image) => (
        <div key={image.id} className="image-card">
          <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
            <img src={image.webformatURL} alt={image.tags} />
          </a>
          <div className="image-info">
            <p className="image-tags">{image.tags}</p>
            <p className="image-author">
              By{" "}
              <a
                href={image.userImageURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.user}
              </a>
            </p>
            <div className="image-status">
              <p>
                {image.views} <i className="fa fa-eye"></i>
              </p>
              <p>
                {image.downloads} <i className="fa fa-download"></i>
              </p>
              <p>
                {image.likes} <i className="fa fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
