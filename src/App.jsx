import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import CartPage from "./components/CartPage";
import CartProvider from "./components/CartContext";
import ItemSearch from './components/ItemSearch';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Bryaxis" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/item/:id" element={<ItemSearch />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
