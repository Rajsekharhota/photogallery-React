import React, { createContext, useEffect, useState } from "react";

export const allImagesContext = createContext();

function ImageContext({ children }) {
  let [imgData, setImgData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      await fetch(
        "https://pixabay.com/api/?key=39933867-725eaecf1422980989c661939"
      )
        .then((res) => res.json())
        .then((data) => setImgData(data.hits));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <allImagesContext.Provider value={{ imgData }}>
      {children}
    </allImagesContext.Provider>
  );
}

export default ImageContext;
