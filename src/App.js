import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Cart from "./components/cart/Cart";
import Register from "./components/Register/Register";
<<<<<<< HEAD
import Undifined from "./components/undifinedPage/Undifined";
=======

>>>>>>> 25c3b328e5d3ec47d2c8af5f2fa47bd9a69dea05
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
        <Route path="/reg" element={<Register />} />
        <Route path="/undifined" element={<Undifined />} />
=======

        <Route path="/register" element={<Register />} />
>>>>>>> 25c3b328e5d3ec47d2c8af5f2fa47bd9a69dea05
      </Routes>
    </div>
  );
}

export default App;
