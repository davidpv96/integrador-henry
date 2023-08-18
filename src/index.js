import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
import { Provider } from 'react-redux'; // Importa el Provider
import store from './redux/store'; // Importa tu configuración de store

ReactDOM.render(
 <Provider store={store}>
 <BrowserRouter>
  <App />
</BrowserRouter>
</Provider>,
document.getElementById('root')
)
