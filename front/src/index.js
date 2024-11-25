import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ConfigProvider } from 'antd';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{
      "token": {
        "colorPrimary": "#7ab2d3",
        "colorInfo": "#7ab2d3"
      }
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
);