import React from 'react';
// import axios from 'axios';

import Api from '../../services/api';
import ProductContainer from '../ProductContainer';

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
    return (
      <ul className="list-unstyled d-inline-flex flex-wrap">
        {
          this.state.products.length && this.state.products.map(({ id, name, price }) => 
            <ProductContainer id={id} name={name} price={price} photo={`https://picsum.photos/id/${id}/200/250?grayscale`} key={id} />
          )
        }
      </ul>
    )
  }
}
