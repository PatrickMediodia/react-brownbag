import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from './providers/UserProvider';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
