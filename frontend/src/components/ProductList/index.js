import React from 'react';
// import axios from 'axios';

import Api from '../../services/api';
import ProductItem from '../ProductItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const products = await Api().list();
      this.setState({ products });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products } = this.state;
    return (
      <ul className="list-unstyled d-inline-flex flex-wrap">
        {
          products.length ? products.map(product => 
            <ProductItem
              id={product.id}
              name={product.name}
              price={product.price}
              photo={`https://picsum.photos/id/${product.id}/200/250?grayscale`}
              key={product.id} />
          ) :
          null /* put loader in some moment */
        }
      </ul>
    )
  }
}
