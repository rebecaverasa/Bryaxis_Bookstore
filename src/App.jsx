import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o componente Routes
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use o componente Routes como um contêiner para suas rotas */}
        <Route path="/" element={<ItemListContainer />} />
        {/* Outras rotas aqui */}
        <Route path="/cart" element={<CartPage />} /> {/* Use o atributo "element" para definir o componente */}
      </Routes>
    </Router>
  );
}

export default App;
