import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink, Card, Button } from 'reactstrap';

import * as ActionsCart from '../../store/actions/cart';
import './style.css';

const Cart = ({ products, removeProductToCart }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <NavLink
        tag="span"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <span>Carrinho <strong>{products.length ? products.length : 0}</strong></span>
        {
          isHovering &&
          <Card className={isHovering ? 'mini-cart in' : 'mini-cart out'}>
            <ul className="list-unstyled">
              {
                products.length ? 
                  products.map(product => 
                  <li
                    key={product.id}
                    className="d-flex justify-content-between align-items-end">
                      <Button
                        outline
                        size="sm"
                        color="danger"
                        onClick={() => removeProductToCart(product.id)}
                      >DEL</Button>
                      <div
                        className="d-flex justify-content-between align-items-end"
                        style={{width: '100%', marginLeft: '10px'}}>
                        <span>{product.qty}x</span>
                        <Link to={`/product/${product.id}/detail`} className="truncate">{product.name}</Link>
                        <span>R${product.price}</span>
                      </div>
                  </li>
                  ) : 
                  <li>Seu carrinho está vazio.</li>
              }
            </ul>
          </Card>
        }
      </NavLink>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  products: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeProductToCart: id => dispatch(ActionsCart.removeProductToCart(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
