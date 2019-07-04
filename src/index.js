import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

import "./styles/styles.scss";

const App = () => (
  <Switch>
    <Route path={"/"} component={HomePage} exact />
    <Route path={"/shop"} component={ShopPage} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);