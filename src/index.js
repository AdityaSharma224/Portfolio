import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './app/components/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline> 
        <ScrollToTop/>
          <App/>
        </CssBaseline>
      </BrowserRouter>
  </React.Fragment>
);