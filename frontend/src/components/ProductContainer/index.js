import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle } from 'reactstrap';

import './style.css';

const ProductContainer = (props) => {
  return (
    <li className="m-4">
      <Card>
        <CardImg width="100%" src={props.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>R$ {typeof props.price === 'number' ? props.price.toFixed(2) : props.price}</CardSubtitle>
          <Link to={`/product/${props.id}/detail`}>Detalhes</Link>
        </CardBody>
      </Card>
    </li>
  )
}

export default ProductContainer;
