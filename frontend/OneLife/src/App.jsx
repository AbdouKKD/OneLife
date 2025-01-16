import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemsList from './pages/ItemsList/ItemsList';

 const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/items" element={<ItemsList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
); 

export default App;