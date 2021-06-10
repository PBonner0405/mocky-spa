import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';

import './global.css';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
