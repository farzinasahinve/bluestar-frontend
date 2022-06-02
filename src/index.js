import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { store } from "./app/store";
import { store } from './store/store';
import { loadUser, refreshToken } from './actions/authAction';
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem('token');
const user  = token && jwt_decode(token);
console.log(user);
if (user) {
  if(user.exp*1000 < Date.now() && localStorage.getItem('remember_me')){
    store.dispatch(refreshToken())
  }
  store.dispatch(loadUser());
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

