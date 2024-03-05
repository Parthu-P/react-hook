import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Context from './context-hook/Context';
import ReducerDemo from './reducer-hook/ReducerDemo';
import { Provider } from 'react-redux';
import FakeStore from './reduxtoolkit/fakestore/FakeStore';
import Store from './reduxtoolkit/Store';
import TestDemo from './test/TestDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <TestDemo/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
