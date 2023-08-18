import React from 'react';
import PropTypes from 'prop-types';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({ item }) => {
  const handleAddToCart = (quantity) => {
    if (quantity > 0) {
      console.log(`Adicionando ${quantity} unidades de "${item.title}" ao carrinho.`);
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
        {item.title}
      </h2>
      <p className="text-sm">${item.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-2">Em estoque: {item.stock}</p>
      <ItemDetailContainer description={item.description} onAddToCart={handleAddToCart} /> {/* Passa a descrição e a função handleAddToCart como props */}
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
