import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/configureStore";
import AppRouter from "./routers/AppRouter"
import "normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);