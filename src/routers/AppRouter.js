import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { firebase } from "../firebase/firebase";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import Header from "../components/Header";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path={"/"} component={HomePage} exact />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/signin"} component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default AppRouter;