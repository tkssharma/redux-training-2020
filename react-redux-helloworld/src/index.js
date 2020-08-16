
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import helloReducer from './reducers'
import App from './components/App'

const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);

const store = finalCreateStore(helloReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)