import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId='223065875414-bmm1ql94hgc1l0kdomo1290hgv6mntks.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
