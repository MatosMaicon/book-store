import React from 'react';
import { connect } from 'react-redux';

import ProductDetail from '../../components/ProductDetail';
import * as ActionsCart from '../../store/actions/cart';

const ProductDetailContainer = ({ props, addProductToCart }) => {
  const { match: { params } } = props;
  return (
    <ProductDetail
      id={params.id} />
  );
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(ActionsCart.addProductToCart(product)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
