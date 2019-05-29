import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import If from '../Operator/if';
import Cart from '../Cart';
import { checkAccess } from '../../services/auth';

const Header = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag="div">
          <Link to={'/'} className="nav-link">StoreJS</Link>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(true)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Cart />
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                { user.name ? user.name : 'Visitante' }
              </DropdownToggle>
              <DropdownMenu right>
                <If test={checkAccess()}>
                  <DropdownItem>
                    <Link to='/client' >
                      Pedidos
                    </Link>
                  </DropdownItem>
                </If>
                <If test={checkAccess('admin')}>
                  <DropdownItem>
                    <Link to='/products' >
                      Produtos
                    </Link>
                  </DropdownItem>
                </If>
                <If test={!checkAccess()}>
                  <DropdownItem>
                    <Link to='/login' >
                      Login
                    </Link>
                  </DropdownItem>
                </If>
                <If test={checkAccess()}>
                  <DropdownItem divider />
                  <DropdownItem className="link" >
                    <Link to="/logout">Logout</Link>
                  </DropdownItem>
                </If>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

export default connect(mapStateToProps)(Header);
