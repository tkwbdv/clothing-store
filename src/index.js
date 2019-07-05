import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import Header from "./components/Header";

import "./styles/styles.scss";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path={"/"} component={HomePage} exact />
      <Route path={"/shop"} component={ShopPage} />
      <Route path={"/signin"} component={SignInSignUpPage} />
    </Switch>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);