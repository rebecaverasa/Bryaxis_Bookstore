import React, { useState } from "react";
import PropTypes from 'prop-types';
import ItemCount from './ItemCount';
import Checkout from './Checkout';

const ItemDetail = ({ description, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCart = (quantity) => {
    onAddToCart(quantity);
    setShowDescription(false);
    setShowCheckout(true);
  };

  return (
    <div>
      {!showCheckout && (
        <div>
          <ItemCount stock={10} onAddToCart={handleAddToCart} />
          <button
            onClick={toggleDescription}
            className="px-2 py-0.5 mt-2 bg-[#dfdfdf] text-gray-700 rounded-[20px] hover:bg-[#f8f8f2] focus:outline-none"
          >
            Descrição
          </button>
          {showDescription && (
            <p className="mt-2 text-gray-700 text-sm leading-snug">{description}</p>
          )}
        </div>
      )}
      {showCheckout && <Checkout />}
    </div>
  );
};

ItemDetail.propTypes = {
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemDetail;
