import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AdminRoute from './AdminRoute'
import { Container } from 'reactstrap';
import store from '../store';


import Header from './shared/header';
import ProductList from './product-list';
import ProductDetail from './containers/product-detail';
import BookList from './book-list';
import BookForm from './book-form';
import Auth from './auth';
import Message from './shared/message'

import './App.css';

class App extends Component {
 

  render (){
    

    return (
      <Router>
        <Provider store={store}>
          <Header/>
          <Container>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/login' component={Auth} />
  
            <Route exact path='/product/:id/detail' component={ProductDetail} />
            <AdminRoute exact path='/books' component={BookList} />
            <Route exact path='/books/new' component={BookForm} />
            <Route exact path='/books/edit/:id' component={BookForm} />
          </Container>
          <Message />
        </Provider>
      </Router>
    );
  }
  
}

export default App;
