import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';

import ErrorHandler from './components/ErrorHandler'
import Routes from './routes'
import Header from './components/Header';
import Message from './components/Message'

import './App.css';

const App = props => (
  <Router>
    <ErrorHandler>
      <Header />
      <Container>
        <Routes />
      </Container>
    </ErrorHandler>
    <Message />
  </Router>
)

export default App;
