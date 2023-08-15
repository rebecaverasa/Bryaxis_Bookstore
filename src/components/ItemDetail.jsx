import React, { useState } from "react";

const ItemDetail = ({ description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <button
        onClick={toggleDescription}
        className="px-2 py-0.5 mt-2 bg-[#dfdfdf] text-gray-700 rounded-lg hover:bg-[#f8f8f2] focus:outline-none"
      >
        Descrição
      </button>
      {showDescription && (
        <p className="mt-2 text-gray-700 text-sm leading-snug">{description}</p>
      )}
    </div>
  );
};

export default ItemDetail;
