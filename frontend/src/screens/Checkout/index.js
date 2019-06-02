import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import { toastr } from 'react-redux-toastr';
import { isEmpty } from 'lodash';

import { removeProductToCart, removeAllProducts } from '../../store/actions/cart';
import Api from '../../services/orders';
import './style.css';

const Checkout = ({ products, auth, ownProps, removeProductToCart, removeAllProducts }) => {
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!isEmpty(auth)) {
      const orders = products.map(item => ({
        productId: item.id,
        quantity: item.qty
      }));
  
      try {
        const response = await Api.save({
          dateOrder: new Date().toISOString(),
          status: 'pending',
          items: orders,
          total: products.reduce((acc, item) => acc + (item.price * item.qty), 0),
          userId: auth.user.id
        })
  
        if (response) {
          toastr.success('Sucesso', 'Operação Realizada com sucesso.');
          removeAllProducts();
          ownProps.history.push('/client');
        }
      } catch (error) {
        console.log(error);
        toastr.error('Error', `${error}`);
      }

    } else {
      ownProps.history.push({
        pathname: '/login',
        state: { from: ownProps.location }
      });
    }

  }
  return (
    <>
      <Container className="mt-4">
        <h1>Checkout</h1>
        <h5>Produtos</h5>
        <ul className="list-unstyled">
          {
            products.length ?
              products.map(product =>
                <li
                  key={product.id}
                  className="checkout-list-prods">
                  <Button
                    outline
                    size="sm"
                    color="danger"
                    onClick={() => removeProductToCart(product.id)}>
                    <i className="fa fa-trash"></i></Button>
                  <div
                    className="checkout-list-item"
                    style={{ width: '100%', marginLeft: '10px' }}>
                    <span>{product.qty}x</span>
                    <Link to={`/product/${product.id}/detail`} className="truncate">{product.name}</Link>
                    <span>R${product.price}</span>
                  </div>
                </li>
              ) :
              <li>Seu carrinho está vazio.</li>
          }
          <li className="mt-3">
            <div className="checkout-list-prods">
              <span>Total</span>
              <span>
                <strong>R$ {
                  products.length ?
                    products.reduce((acc, item) => acc + (item.price * item.qty), 0)
                    : '0.00'
                }</strong>
              </span>
            </div>
          </li>
        </ul>
        <Button
          color="success"
          onClick={handleSubmitOrder}
          disabled={!products.length}
        >Finalizar</Button>
      </Container>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  products: state.cart,
  auth: state.auth,
  ownProps
})

const mapDispatchToProps = dispatch => ({
  removeProductToCart: id => dispatch(removeProductToCart(id)),
  removeAllProducts: () => dispatch(removeAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);