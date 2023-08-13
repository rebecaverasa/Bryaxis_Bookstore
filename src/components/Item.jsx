// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = item.stock;

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      console.log(`Adicionando ${quantity} unidades de "${item.title}" ao carrinho.`);
      // Aqui você pode implementar a lógica para atualizar o estoque do produto
      // e adicionar ao carrinho, como por exemplo, usar um estado global de carrinho.
    }
  };

  return (
    <div className="text-center mt-4">
      <img
        src={item.pictureUrl}
        alt={item.title}
        className="w-32 h-auto mx-auto mb-4"
      />

      <h2 className="text-lg font-semibold">
        {item.title}<span role="img" aria-label="headset">🎧</span>
      </h2>
      <button className="text-sm text-gray-600 hover:bg-[#bd93f9] rounded-md px-2 py-1">
        {item.description}
      </button>
      <p className="text-sm">${item.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-2">Em estoque: {stock}</p>

      <div className="flex items-center justify-center">
        <button
          className="px-1 py-0.5 bg-[#bd93f9] text-gray-300 rounded-l-md hover:bg-[#bd93f9] focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="px-1 py-0.5 bg-gray-100 text-gray-900">
          {quantity}
        </div>
        <button
          className="px-1 py-0.5 bg-[#bd93f9] text-gray-300 rounded-r-md hover:bg-[#bd93f9] focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <button
        className="mt-5 px-1 py-0.5 bg-[#646472] text-white rounded-md hover:bg-black focus:outline-none"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
