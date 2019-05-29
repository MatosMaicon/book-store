import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import persistor from './store/persisted_store';

import './index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
, document.getElementById('root'));
