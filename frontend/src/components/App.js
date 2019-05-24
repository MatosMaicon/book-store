import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../config/history';
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
    <Router history={history}>
      <Provider store={store}>
        <Header/>
        <Container>
          <Switch>  
            <Route exact path='/' component={ProductList} />
            <Route exact path='/product/:id/detail' component={ProductDetail} />
            <Route exact path='/books' component={BookList} />
            <Route exact path='/books/new' component={BookForm} />
            <Route exact path='/books/edit/:id' component={BookForm} />
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
