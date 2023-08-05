// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ItemCount = () => {
    const stock = 20; // Estoque máximo do audiobook "Corte de Espinhos e Rosas"
    const [quantity, setQuantity] = useState(1); // Alterado o valor inicial para 1

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // lógica para adicionar o produto ao carrinho
        console.log(`Adicionando ${quantity} unidades ao carrinho.`);
    };

    return (
        <div className="text-center mt-4"> {/* margem de 4 unidades */}
            <img
                src="https://a-static.mlcdn.com.br/800x560/livro-corte-de-espinhos-e-rosas-vol-1/magazineluiza/222675000/95c028ee215eb08390f79dafa1dfae7c.jpg"
                alt="Corte de Espinhos e Rosas - Audiobook"
                className="w-32 h-auto mx-auto mb-4"
            />

            <p className="text-lg font-semibold">Corte de Espinhos e Rosas - Audiobook</p>
            <p className="text-sm text-gray-600 mb-4">Em estoque: {stock}</p>

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
            <div>
                
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

export default ItemCount;
