// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Item from './Item';

const mockItems = [
  {
    id: 1,
    title: 'Corte de Espinhos e Rosas',
    description: 'Ela roubou uma vida. Agora deve pagar com o coração. Em Corte de espinhos e rosas, livro que da início a uma das séries mais queridas pelo público, acompanhe as aventuras de Feyre pelo perigoso e deslumbrante mundo das fadas. Sarah J. Maas é uma verdadeira estrela: após apenas uma semana de vendas, a série Corte de Espinhos e Rosas estreou em segundo lugar na lista do New York Times. Ela também é autora da série Trono de Vidro, que já teve mais de 1 milhão de exemplares vendidos.',
    price: 19.99,
    stock: 50,
    pictureUrl: 'https://a-static.mlcdn.com.br/800x560/livro-corte-de-espinhos-e-rosas-vol-1/magazineluiza/222675000/95c028ee215eb08390f79dafa1dfae7c.jpg',
  },
  {
    id: 2,
    title: 'Corte de Névoa e Fúria',
    description: 'Por amor ela enganou a morte. Por liberdade, ela se tornará uma arma. Corte de névoa e fúria é o esperado segundo volume da saga iniciada em Corte de espinhos e rosas. Sarah J. Maas é uma verdadeira estrela: após apenas uma semana de vendas, a série Corte de Espinhos e Rosas estreou em segundo lugar na lista do New York Times. Ela também é autora da série Trono de Vidro, que já teve mais de 1 milhão de exemplares vendidos.',
    price: 29.99,
    stock: 40,
    pictureUrl: 'https://m.media-amazon.com/images/I/81PGQZ8qBlL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    title: 'Corte de Asas e Ruína',
    description: 'Em meio a guerra, é seu coração que enfrentará a mais árdua das batalhas... Corte de asas e ruína é o eletrizante terceiro volume da série best-seller iniciada em Corte de Espinhos e Rosas. Sarah J. Maas é uma verdadeira estrela: após apenas uma semana de vendas, a série Corte de Espinhos e Rosas estreou em segundo lugar na lista do New York Times. Ela também é autora da série Trono de Vidro, que já teve mais de 1 milhão de exemplares vendidos.',
    price: 29.99,
    stock: 60,
    pictureUrl: 'https://m.media-amazon.com/images/I/91IWJY6FvtL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 4,
    title: 'Corte de Gelo e Estrelas',
    description: 'A série best seller Corte de Espinhos e Rosas ganha um spin-off em Corte de gelo e estrelas: volume que tem início após os acontecimentos de Corte de asas e ruína. Sarah J. Maas é uma verdadeira estrela: após apenas uma semana de vendas, a série Corte de Espinhos e Rosas estreou em segundo lugar na lista do New York Times. Ela também é autora da série Trono de Vidro, que já teve mais de 1 milhão de exemplares vendidos.',
    price: 29.99,
    stock: 20,
    pictureUrl: 'https://m.media-amazon.com/images/I/518s41IDWuL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
  },
  {
    id: 5,
    title: 'Corte de Chamas Prateadas',
    description: 'A guerra finalmente chegou ao fim, e a irmã de Feyre, Nestha, brilha em Corte de chamas prateadas, a sedutora e poderosa sequência da aclamada série Corte de espinhos e rosas.',
    price: 29.99,
    stock: 70,
    pictureUrl: 'https://d2i0w0hu6hvxgc.cloudfront.net/B093CB5RSN/163c886/cover.jpeg',
  },
];

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(mockItems);
    }, 2000);
  }, []);

  return (
    <div className="px-10"> {/* Adiciona espaço nas laterais */}
      <h1 className="text-[#282a36] text-4xl font-bold text-center mb-7 mt-16">Catálogo</h1>
      <div className="justify-center">
        <div className="grid grid-cols-5 gap-2"> {/* Ajusta o espaçamento entre os produtos */}
          {items.map((item) => (
            <div key={item.id} className="p-6 border border-gray-300 m-1"> {/* Adiciona a borda cinza */}
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;