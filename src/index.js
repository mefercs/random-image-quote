import {createRoot} from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import store from './app/store'
import React from 'react'
import './index.css'

const root = createRoot( document.getElementById('root') )

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
  </Provider>
  </React.StrictMode>
)
