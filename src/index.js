import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
