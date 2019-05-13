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
    const { match: { params } } = this.props;
    try {
      const product = await Api().byId(params.id);
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
          <Media left href="#" className="mr-3">
            <Media object src={`https://picsum.photos/id/${id}/200/250?grayscale`} height="250px" width="200px" alt="Generic placeholder image" />
            <div>
              <Button className="w-100 mt-1">Adicionar</Button>
            </div>
          </Media>
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
