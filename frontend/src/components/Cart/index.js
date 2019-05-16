import React from 'react';
import { connect } from 'react-redux';
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
                    <li key={product.id}>{product.qty}x - {product.name} - R${product.price}</li>
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
