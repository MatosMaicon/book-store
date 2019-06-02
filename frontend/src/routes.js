import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'

import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';
import ProductForm from './screens/ProductForm';
import Checkout from './screens/Checkout';
import OrderList from './screens/OrderList';
import Login from './screens/Auth';

const Routes = () => (
  <>
    <Route exact path='/' component={Home} />
    <ProtectedRoute exact path='/products' component={ProductList} roles={["admin"]} />
    <ProtectedRoute exact path='/products/new' component={ProductForm} roles={["admin"]} />
    <ProtectedRoute exact path='/products/edit/:id' component={ProductForm} roles={["admin"]} />
    <Route exact path='/products/show/:id' component={ProductDetail} />

    <Route exact path='/checkout' component={Checkout} />
    <ProtectedRoute exact path='/client' component={OrderList} roles={["admin", "client"]} />

    <Route exact path='/login' component={Login} />
  </>
)

export default Routes;
