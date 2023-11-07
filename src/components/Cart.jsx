import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItem } = useCartContext();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center mt-8">
        <p className="text-gray-600 text-lg mb-4">Não há itens no carrinho.</p>
        <Link to="/" className="px-4 py-2 bg-[#bd93f9] text-white rounded-md hover:bg-black">
          Voltar à página inicial
        </Link>
      </div>
    );
  }

  // Calcular preço total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl font-semibold mb-4">Carrinho de Compras</h1>
      <div className="mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-2 mb-2">
            <div className="flex items-center space-x-4">
              <img src={item.pictureUrl} alt={item.title} className="w-16 h-16 object-cover" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">Quantidade: {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="font-semibold">Total: R$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
