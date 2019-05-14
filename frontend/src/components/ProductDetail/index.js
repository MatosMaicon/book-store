import React from 'react';
import { Media, Button } from 'reactstrap';

import Api from '../../services/api';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };

  }
  
  async componentDidMount() {
    try {
      const product = await Api().byId(this.props.id);
      this.setState({ product });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { id, name, description, price } = this.state.product;
    return (
      <div className="m-3">
        <Media>
          <div className="mr-3" style={{ width: '200px' }}>
            <Media left href="#">
              <Media object src={`https://picsum.photos/id/${id}/200/250?grayscale`} height="250px" width="200px" alt="Generic placeholder image" />
            </Media>
            <Button className="w-100 mt-1">Adicionar</Button>
          </div>
          <Media body>
            <Media heading>
              {name}
            </Media>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <span>Rating: 1/5</span>
              <h3>R$ {typeof price === 'number' ? price.toFixed(2) : price}</h3>
            </div>
            <div className="text-justify mt-3">
              {description}  
            </div>
          </Media>
        </Media>
      </div>
    )
  }
}
