import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink, Card } from 'reactstrap';

import './style.css';

const Cart = ({ products }) => {
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
          <Card className="mini-cart">
            <ul className="list-unstyled">
              {
                products.length ? 
                  products.map(product => 
                  <li
                    className="d-flex justify-content-between align-items-end"
                    key={product.id}>
                      <span>{product.qty}x</span>
                      <Link to={`/product/${product.id}/detail`} className="truncate">{product.name}</Link>
                      <span>R${product.price}</span>
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

export default connect(mapStateToProps)(Cart);
