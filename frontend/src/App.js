import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/shared/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/product/:id/detail' component={ProductDetail} />
      </Container>
    </Router>
  );
}

export default App;
