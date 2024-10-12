import React from "react";
import DataProvider from "../DataProvider/"
import Home from "../Home/Home";
import CategoryPick from "../CagetoryPick/CategoryPick";
import HowToPlay from "../HowToPlay/HowToPlay"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryPick />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
         </Routes>
    </DataProvider>
  );
}

export default App;
