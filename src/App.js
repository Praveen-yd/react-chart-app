import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
