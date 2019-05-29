import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  Button,
  CardSubtitle,
  CardTitle } from 'reactstrap';

import { addProductToCart } from '../../store/actions/cart';

import './style.css';

const ProductCard = ({ product, addProductToCart }) => {
  return (
    <li className="m-4">
      <Card className="card-item">
        <CardImg width="100%" src={`http://localhost:3001/images/product/${product.image}`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>R$ {typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</CardSubtitle>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/products/show/${product.id}`}>Detalhes</Link>
            <Button
              className="link"
              onClick={() => addProductToCart({ ...product, qty: 1 })}>
              <i className="fa fa-plus-circle fa-2x"></i>
            </Button>
          </div>
        </CardBody>
      </Card>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: ownProps
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
