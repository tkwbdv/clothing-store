import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(SignInSignUpPage);