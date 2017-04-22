import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(
	(state = {}) => state,
		applyMiddleware(thunk)
	);
// import { Router, browserHistory } from 'react-router'

ReactDOM.render(
	<Provider store={store}>
  <Home /></Provider>,
  document.getElementById('root')
);
