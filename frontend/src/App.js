import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';

import Routes from './routes'
import Header from './components/Header';
import Message from './components/Message'

import './App.css';

const App = props => (
  <Router>
    <Header />
    <Container>
      <Routes />
    </Container>
    <Message />
  </Router>
)

export default App;
