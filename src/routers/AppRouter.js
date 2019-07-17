import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { firebase, createUserProfileDocument } from "../firebase/firebase";
import { setCurrentUser } from "../actions/userActions";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import CheckoutPage from "../pages/CheckoutPage";

import Header from "../components/Header";

const AppRouter = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else setCurrentUser(null);
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData))
});

export default connect(undefined, mapDispatchToProps)(AppRouter);