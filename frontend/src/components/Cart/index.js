import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';

const Cart = ({ products }) => (
  <NavLink>
    <span>Carrinho <strong>{products.length ? products.length : 0}</strong></span>
  </NavLink>
);

export default connect(state => ({ products: state.cart }))(Cart);
