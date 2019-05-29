import React from 'react';
import { Container } from 'reactstrap';

import Routes from './routes'
import Header from './components/Header';
import Message from './components/Message'

import './App.css';

const App = props => (
  <>
    <Header />
    <Container>
      <Routes />
    </Container>
    <Message />
  </>
)

export default App;
