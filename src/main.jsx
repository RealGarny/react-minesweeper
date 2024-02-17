import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game.jsx';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Game />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
