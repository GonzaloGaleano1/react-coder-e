import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import data from '../data/products.json'


 

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams()
    
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
          const filter = data.find((p) => p.id === Number(id));
          setProduct(filter)

            setProduct(data[0]);
        });
    }, [id])

    if(!product) return <div>Loading</div>

    return <Container className='mt-4'>
    <h2>{product.name}</h2>
    <img src={product.img} />
    </Container>
}