import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Facilities from "./pages/facilities";
import Customers from "./pages/customers";
import Contact from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
