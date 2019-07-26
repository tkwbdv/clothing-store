import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import CheckoutPage from "../pages/CheckoutPage";

import Header from "../components/Header";

import { checkUserSession } from "../actions/userActions";

const AppRouter = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} component={HomePage} exact />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/signin"} component={SignInSignUpPage} exact />
        <Route path={"/checkout"} component={CheckoutPage} exact />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  null,
  mapDispatchToProps
)(AppRouter);
