import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import store from '../store';

import Header from './shared/header';
import ProductList from './product-list';
import ProductDetail from './containers/product-detail';
import BookList from './book-list';
import BookForm from './book-form';

import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <Container>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/product/:id/detail' component={ProductDetail} />
          <Route exact path='/books' component={BookList} />
          <Route exact path='/books/new' component={BookForm} />
          <Route exact path='/books/edit/:id' component={BookForm} />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
