import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './shared/protected-route'
import { Container } from 'reactstrap';
import store from '../store';


import Header from './shared/header';
import ProductList from './product-list';
import ProductDetail from './containers/product-detail';
import BookList from './book-list';
import BookForm from './book-form';
import OrderList from './order-list';
import Auth from './auth';
import Message from './shared/message'

import './App.css';

const App = props => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Container>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/login' component={Auth} />

          <Route exact path='/product/:id/detail' component={ProductDetail} />

          <ProtectedRoute exact path='/client' component={OrderList} />

          <ProtectedRoute exact path='/books' component={BookList} rule="admin" />
          <ProtectedRoute exact path='/books/new' component={BookForm} rule="admin" />
          <ProtectedRoute exact path='/books/edit/:id' component={BookForm} rule="admin" />
        </Container>
        <Message />
      </Provider>
    </Router>
  );
}

export default App;
