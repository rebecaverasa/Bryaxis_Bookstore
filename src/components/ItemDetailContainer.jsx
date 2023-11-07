import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ description, onAddToCart }) => {
  return (
    <div>
      <ItemDetail description={description} onAddToCart={onAddToCart} /> {/* Passa a descrição e a função onAddToCart */}
    </div>
  );
};

export default ItemDetailContainer;
