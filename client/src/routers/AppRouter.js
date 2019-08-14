import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../styles/globalStyles";

import { checkUserSession } from "../actions/userActions";

import Header from "../components/Header";
import Spinner from "../components/Spinner";
import ErrorBoudary from "../components/ErrorBoundary";

const HomePage = lazy(() => import("../pages/HomePage"));
const SignInSignUpPage = lazy(() => import("../pages/SignInSignUpPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));

const AppRouter = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoudary>
          <Suspense fallback={<Spinner />}>
            <Route path={"/"} component={HomePage} exact />
            <Route path={"/shop"} component={ShopPage} />
            <Route path={"/signin"} component={SignInSignUpPage} exact />
            <Route path={"/checkout"} component={CheckoutPage} exact />
          </Suspense>
        </ErrorBoudary>
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
