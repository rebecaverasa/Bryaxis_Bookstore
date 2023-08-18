import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleFinalizePurchase = () => {
    navigate('/cart');
  };

  return (
    <button
      onClick={handleFinalizePurchase}
      className="px-2 py-1 bg-[#bd93f9] text-white rounded-md hover:bg-black focus:outline-none"
    >
      Finalizar Compra
    </button>
  );
};

export default Checkout;
