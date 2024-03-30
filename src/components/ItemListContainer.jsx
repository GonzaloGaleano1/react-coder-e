import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import data from '../data/products.json'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { id } = useParams ();
    
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            if (!id) {
            setProducts(data)
            } else {
              const filtered = data.filter(p => p.id === Number(id));
              setProducts(filtered) 
            }
            setProducts(data);
        });
    }, [id])

    return <Container className='mt-4'>
     <ItemList  products={products } />
    </Container>
}