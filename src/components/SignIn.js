import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { firebase, signInWithGoogle } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

import {
  ButtonsBarContainer,
  SignInTitle,
  SignInContainer
} from "../styles/components/_SignIn";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
      console.error("error signing in", error);
    }
  };

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    history.push("/");
  };

  const handleChange = e => {
    const { value, name } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={handleSignInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default withRouter(SignIn);
