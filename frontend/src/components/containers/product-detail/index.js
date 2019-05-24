import React from 'react';
import { connect } from 'react-redux';
import { Media, Button } from 'reactstrap';
import { isEmpty } from 'lodash';

import * as ActionsCart from '../../../store/actions/cart';

import Api from '../../../services/api';
import photo from '../../../services/photo-random';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchProductDetail(params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { match: { params } } = nextProps
      this.fetchProductDetail(params.id);
    }
  }

  async fetchProductDetail(id) {
    try {
      const product = await Api.byId(id);
      this.setState({ product });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { id, name, description, price, image } = this.state.product;
    return (
      <div className="m-3">
        {
          !isEmpty(this.state.product) &&
          <Media>
            <div className="mr-3" style={{ width: '200px' }}>
              <Media left href="#">
                <Media
                  object
                  src={photo(image)}
                  height="250px"
                  width="200px"
                  alt="Generic placeholder image"
                />
              </Media>
              <Button
                className="w-100 mt-1"
                onClick={() => this.props.addProductToCart({ id, name, qty: 1, price })}
                >Adicionar</Button>
              <Button
                className="w-100 mt-1"
                onClick={() => this.props.removeProductToCart(id)}
                disabled={!this.props.products.some(product => product.id === id)}
                >Remover</Button>
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
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  products: state.cart
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(ActionsCart.addProductToCart(product)), 
  removeProductToCart: id => dispatch(ActionsCart.removeProductToCart(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
