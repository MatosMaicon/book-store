import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink, Card } from 'reactstrap';

import './style.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <>
        <NavLink
          tag="span"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
          <span>Carrinho <strong>{this.props.products.length ? this.props.products.length : 0}</strong></span>
          {
            this.state.isHovering &&
            <Card className="mini-cart">
              <ul className="list-unstyled">
                {
                  this.props.products.length ? 
                    this.props.products.map(product => 
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
}

const mapStateToProps = (state, ownProps) => ({
  products: state.cart,
  props: ownProps
})

export default connect(mapStateToProps)(Cart);
