import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter"
import "normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);