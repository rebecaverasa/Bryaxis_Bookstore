import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import CartPage from "./components/CartPage";
import CartProvider from "./components/CartContext"; // Importe o CartProvider

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
