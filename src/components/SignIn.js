import React, { useState } from "react";
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
      <h2>I already have an account</h2>
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
        <CustomButton type="submit">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;