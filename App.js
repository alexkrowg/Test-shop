import React from "react";
import Carousel from "./components/carousel/Carousel";
import Homegrid from "./components/homegrid/Homegrid";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <Homegrid />
    </div>
  );
}
