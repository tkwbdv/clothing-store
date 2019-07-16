import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/configureStore";
import AppRouter from "./routers/AppRouter"
import "normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);