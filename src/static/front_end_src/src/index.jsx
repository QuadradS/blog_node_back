import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router'
import './styles/index.scss'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const history = createBrowserHistory()
const store = createStore(rootReducer(history), applyMiddleware(thunk))

export { history }

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'))

