import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import { selectCurrentUser } from "../selectors/userSelectors";

import { SignInAndSignUpContainer } from "../styles/pages/_SignInSignUpPage";

const SignInSignUpPage = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div>
        <Redirect to="/" />
      </div>
    );
  } else {
    return (
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SignInSignUpPage);
