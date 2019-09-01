import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Repository from './components/Repository';
import FormContact from './components/FormContact';
import App from './components/App';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/repository/' component={Repository} />
      <Route path='/contact/' component={FormContact} />
      <App />
    </BrowserRouter>
  );
}

export default Routes