import React from "react";
import "./App.css";

import paralleximg from "./asset/parallexmain.png";
import TextMain from "./Components/TextMain";
import { Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
const App = () => {
  return (
    <>

    <Routes>
    <Route path="/product" element={<Product/>}/>
    <Route path="/" element={<TextMain/>}/>
    </Routes>
  
    
 
    </>
  );
};

export default App;
