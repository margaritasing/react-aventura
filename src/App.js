import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

import Cities from "./Components/Cities";

import Home from "./Components/Home";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import City from "./Components/City/City";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Esto es para que quede fijo en todas las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/city" element={<City />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
