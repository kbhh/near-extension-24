import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-main-header py-12">
          <h3>
            <span className="Home-title"> Home</span>
            <span>Page</span>
          </h3>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
