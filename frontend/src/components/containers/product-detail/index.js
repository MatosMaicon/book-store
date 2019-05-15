import React from 'react';
import { connect } from 'react-redux';
import { Media, Button } from 'reactstrap';

import * as ActionsCart from '../../../store/actions/cart';

import Api from '../../../services/api';

class ProductDetail extends React.Component {
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

  returnUrl(id) {
    return `https://picsum.photos/id/${id}/200/250?grayscale`;
  }

  render() {
    const { id, name, description, price } = this.state.product;
    return (
      <div className="m-3">
        <Media>
          <div className="mr-3" style={{ width: '200px' }}>
            <Media left href="#">
              <Media object src={this.returnUrl(id)} height="250px" width="200px" alt="Generic placeholder image" />
            </Media>
            <Button className="w-100 mt-1" onClick={() => this.props.addProductToCart({ id, name, qty: 1, price })}>Adicionar</Button>
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

const mapStateToProps = (state, ownProps) => ({
  props: ownProps
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(ActionsCart.addProductToCart(product)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
