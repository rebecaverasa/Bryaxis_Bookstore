import React from 'react';
import PropTypes from 'prop-types';
import ItemDetailContainer from './ItemDetailContainer';
import { useCartContext } from './CartContext';

const Item = ({ item }) => {
  const {addItem} = useCartContext ()

  const handleAddToCart = (quantity) => {
    if (quantity > 0) {
      addItem(item, quantity)
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
    id: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;

