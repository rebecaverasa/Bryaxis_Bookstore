import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../services/firebase';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItemsFromFirestore = async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'Items');

    try {
      const querySnapshot = await getDocs(itemsCollection);
      const itemsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return itemsData;
    } catch (error) {
      console.error('Erro ao buscar dados do Firestore: ', error);
      return [];
    }
  };

  useEffect(() => {
    fetchItemsFromFirestore().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="px-0 bg-[#f5f7f5]"> {/* Adiciona espaço nas laterais */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="md:w-1/2 text-slate-500 text-7xl font-semibold font-inter leading-tight mb-7 mt-7 ml-10" style={{ whiteSpace: 'nowrap' }}>
          Sua lista de <br /> Audiobooks está aqui!
        </div>
        <div className="md:w-1/2 h-auto ml-auto">
          <img
            src="https://images.pexels.com/photos/3728084/pexels-photo-3728084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Audiobooks"
            className="w-full"
            style={{ marginRight: 0 }}
          />
        </div>
      </div>

      <div className="w-full h-1 bg-slate-500" />

      <div className="justify-center ml-10 mr-10">
        <div className="grid grid-cols-5 gap-2"> {/* Ajusta o espaçamento entre os produtos */}
          {items.map((item) => (
            <div key={item.id} className="p-6 border border-gray-300"> {/* Adiciona a borda cinza */}
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;