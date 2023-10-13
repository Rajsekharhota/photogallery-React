import React from "react";

const Header = ({ setSearchImg }) => {
  const handleSearch = (event) => {
    setSearchImg(event.target.value);
  };

  return (
    <div className="header-container">
      <div className="brand-header">
        <p className="brand-name">pixelpioneers</p>
      </div>
      <div className="input-header">
        <h3>Stunning royalty-free images & royalty-free stock</h3>
        <p>
          Over 4.2 million+ high quality stock images, videos and music shared
          by our talented community.
        </p>
        <div className="input-field">
          <span className="fa fa-search icon"></span>
          <input
            type="text"
            placeholder="Search for all images on pixelpioneers"
            onChange={handleSearch}
            className="text-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
