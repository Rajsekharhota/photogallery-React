import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageContext from "./Api/ImageContext";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import ImageDetail from "./components/ImageDetail";
import Footer from "./components/Footer";

function App() {
  const [searchImg, setSearchImg] = useState("");
  return (
    <ImageContext>
      <BrowserRouter>
        <Header setSearchImg={setSearchImg} />
        <Routes>
          <Route path="/" element={<ImageGallery searchImg={searchImg} />} />
          <Route path="/image/:imageUrl" element={<ImageDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ImageContext>
  );
}

export default App;
