import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { firebase, signInWithGoogle } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
      console.error("error signing in", error);
    }
  }

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    history.push("/");
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required />
        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required />
        <div className="buttons">
          <CustomButton type="submit">
            Sign In
          </CustomButton>
          <CustomButton onClick={handleSignInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default withRouter(SignIn);