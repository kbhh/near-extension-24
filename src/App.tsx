import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/auth/Home";
import React from "react";
import VerficationPage from "./pages/auth/Verification";
import SetupAccount from "./pages/auth/SetupAccount";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<VerficationPage />} />
          <Route path="/setup-account" element={<SetupAccount />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
