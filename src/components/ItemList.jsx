import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../services/firebase'

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
