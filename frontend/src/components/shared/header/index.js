import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import If from '../operator/if'

import Cart from '../../containers/cart';

import { checkAccess, signOut } from '../../../services/auth'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag="div">
          <Link to={'/'} className="nav-link">Book Store</Link>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(true)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Cart />
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
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
                    <Link to='/books' >
                      Livros
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
                    <Link to='/' onClick={signOut} >
                      Logout
                    </Link>
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

export default Header;
