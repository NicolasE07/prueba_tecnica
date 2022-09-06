import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { usersReducer } from './reducers/users';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(usersReducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />

    </Provider>

  </React.StrictMode>
);


