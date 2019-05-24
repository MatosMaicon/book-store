import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Media, Button } from 'reactstrap';
import { isEmpty } from 'lodash';

import * as ActionsCart from '../../../store/actions/cart';

import Api from '../../../services/api';
import photo from '../../../services/photo-random';


const ProductDetail = ({ products, ownProps, addProductToCart, removeProductToCart }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const { match: { params } } = ownProps;
    const fetchData = async (id) => {
      try {
        const product = await Api.byId(id);
        setProduct(product);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(params.id);
  }, [ownProps]);

  const { id, name, description, price, image } = product;
  return (
    <div className="m-3">
      {
        !isEmpty(product) &&
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
              onClick={() => addProductToCart({ id, name, qty: 1, price })}
              >Adicionar</Button>
            <Button
              className="w-100 mt-1"
              onClick={() => removeProductToCart(id)}
              disabled={!products.some(product => product.id === id)}
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

const mapStateToProps = (state, ownProps) => ({
  ownProps: ownProps,
  products: state.cart
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(ActionsCart.addProductToCart(product)), 
  removeProductToCart: id => dispatch(ActionsCart.removeProductToCart(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
