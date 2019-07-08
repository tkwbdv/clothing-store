import React, { useState } from "react";
import { signInWithGoogle } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;