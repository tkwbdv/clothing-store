import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { firebase, createUserProfileDocument } from "../firebase/firebase";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import Header from "../components/Header";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(null);

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