import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';
  
  ReactDOM.render(    
      <Provider store={store} >
      <App />
      </Provider>,
    document.getElementById('root')
  );

reportWebVitals();
