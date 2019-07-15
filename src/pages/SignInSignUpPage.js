import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import { selectCurrentUser } from "../selectors/userSelectors";

const SignInSignUpPage = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div>
        <Redirect to="/" />
      </div>
    );
  } else {
    return (
      <div className="sing-in-signup" >
        <SignIn />
        <SignUp />
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SignInSignUpPage);