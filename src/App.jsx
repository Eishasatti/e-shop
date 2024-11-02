import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}