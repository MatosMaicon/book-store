import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

import IfAuth from '../Operator/ifAuth';
import IfNotAuth from '../Operator/ifNotAuth';
import Cart from '../Cart';
import { signOut } from '../../store/actions/auth'

const Header = ({ auth, signOut }) => {
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
                { auth ? auth.user.name : 'Visitante' }
              </DropdownToggle>
              <DropdownMenu right>
                <IfAuth roles={["admin", "client"]}>
                  <DropdownItem>
                    <Link to='/client' >
                      Pedidos
                    </Link>
                  </DropdownItem>
                </IfAuth>
                <IfAuth roles={["admin"]}>
                  <DropdownItem>
                    <Link to='/products' >
                      Produtos
                    </Link>
                  </DropdownItem>
                </IfAuth>
                <IfNotAuth>
                  <DropdownItem>
                    <Link to='/login' >
                      Login
                    </Link>
                  </DropdownItem>
                </IfNotAuth>
                <IfAuth roles={["admin", "client"]}>
                  <DropdownItem divider />
                  <DropdownItem className="link" onClick={signOut} >
                    Logout
                  </DropdownItem>
                </IfAuth>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header);
