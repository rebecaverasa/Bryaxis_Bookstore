import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCartContext } from './CartContext';

const ItemCount = ({ stock, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { isInCart } = useCartContext();

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCartClick = () => {
    if (!isInCart()) {
      onAddToCart(quantity);
    }
  };

  return (
    <div className="flex flex-col items-center"> {/* Centraliza verticalmente */}
      <div className="flex items-center justify-center mb-2"> {/* Centraliza horizontalmente */}
        <button
          className="px-2 py-0.5 bg-[#dfdfdf] text-gray-700 rounded-[20px] hover:bg-[#dfdfdf] focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="px-2 py-0.5 bg-gray-100 text-gray-900">
          {quantity}
        </div>
        <button
          className="px-2 py-0.5 bg-[#dfdfdf] text-gray-700 rounded-[20px] hover:bg-[#dfdfdf] focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className="px-2 py-1 bg-[#bd93f9] text-white rounded-[20px] hover:bg-slate-500 focus:outline-none"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemCount;
