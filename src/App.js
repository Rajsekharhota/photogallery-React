import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Links from "./components/Links";
import Posts from "./components/Posts";
import GhostContext from "./Api/GhostContext";
import Footer from "./components/Footer";

function App() {
  return (
    <GhostContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/links" element={<Links />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GhostContext>
  );
}

export default App;
