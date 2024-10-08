import React from "react";
import DataProvider from "../DataProvider/"
import Home from "../Home/Home";
import CategoryPick from "../CagetoryPick/CategoryPick";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryPick />} />
         </Routes>
    </DataProvider>
  );
}

export default App;
