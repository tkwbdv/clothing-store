import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

import "./styles/styles.scss";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => (
  <Switch>
    <Route path={"/"} component={Homepage} exact />
    <Route path={"/shop/hats"} component={HatsPage} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);