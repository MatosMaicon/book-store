import React from 'react';

import Api from '../../services/api';
import ProductCard from '../containers/product-card';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const products = await Api.list();
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
}
