import React, { useState } from "react";
import { firebase, createUserProfileDocument } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        return setDisplayName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
        return;
    }
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
}

export default SignUp;