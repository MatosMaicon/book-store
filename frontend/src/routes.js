import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'

import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';
import ProductForm from './screens/ProductForm';
import Checkout from './screens/Checkout';
import OrderList from './screens/OrderList';
import Login from './screens/Auth/login';
import Logout from './screens/Auth/logout';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <ProtectedRoute exact path='/products' component={ProductList} rule="admin" />
      <ProtectedRoute exact path='/products/new' component={ProductForm} rule="admin" />
      <ProtectedRoute exact path='/products/edit/:id' component={ProductForm} rule="admin" />
      <Route exact path='/products/show/:id' component={ProductDetail} />

      <Route exact path='/checkout' component={Checkout} />
      <ProtectedRoute exact path='/client' component={OrderList} />

      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />
    </Switch>
  </Router>
)

export default Routes;
