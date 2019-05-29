import React, { useState, useEffect } from 'react';

import Api from '../../services/products';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Api.list();
      setProducts(response);
    }
    fetchData();
  }, []);

  return (
    <ul className="list-unstyled d-inline-flex flex-wrap">
      {
        products.length ? products.map(product => 
          <ProductCard
            key={product.id}
            {...product}
          />
        ) :
        null /* put loader in some moment */
      }
    </ul>
  )
}

export default ProductList;
