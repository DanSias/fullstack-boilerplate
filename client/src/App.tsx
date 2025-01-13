import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from "./pages/About";
import Test from "./pages/Test";

const App: React.FC = () => {
  return (
    <Router>
      <Toolbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
