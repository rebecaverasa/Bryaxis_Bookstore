import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../services/firebase';

const ItemSearch = () => {
    console.log('ItemSearch renderizado');
    const { id } = useParams(); // Pega o ID da URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            const db = getFirestore(app);
            const itemDocRef = doc(db, 'Items', id);

            try {
                const itemDocSnapshot = await getDoc(itemDocRef);
                if (itemDocSnapshot.exists()) {
                    // O item foi encontrado no Firebase.
                    setItem({ id: itemDocSnapshot.id, ...itemDocSnapshot.data() });
                } else {
                    // O item não foi encontrado no Firebase.
                    console.log('Item não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do item: ', error);
            }
        };

        fetchItemDetails();
    }, [id]);

    return (
        <div>
            {item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Preço: R$ {item.price.toFixed(2)}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ItemSearch;
