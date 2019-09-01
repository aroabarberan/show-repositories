import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core'

import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';



ReactDOM.render(
  <MuiThemeProvider> 
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));


serviceWorker.unregister();
