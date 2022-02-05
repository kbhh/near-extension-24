import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/auth/Home";
import React from "react";
import VerficationPage from "./pages/auth/Verification";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-main-header py-12">
          <h3 className="text-align-center text-xl ">
            <span className="home-title"> Home</span>
            <span>Page</span>
          </h3>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<VerficationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
