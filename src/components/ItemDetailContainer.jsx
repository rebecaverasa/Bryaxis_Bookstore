import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ description }) => {
  return (
    <div>
      <ItemDetail description={description} />
    </div>
  );
};

export default ItemDetailContainer;
