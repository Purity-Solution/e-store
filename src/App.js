import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/log" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
