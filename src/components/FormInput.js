import React from "react";

import {
  FormInputLabel,
  FormInputContainer,
  GroupContainer
} from "../styles/components/_FormInput";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      type={otherProps.name}
      onChange={handleChange}
      {...otherProps}
    />
    {label && (
      <FormInputLabel className={`${otherProps.value.length ? "shrink" : ""}`}>
        {label}
      </FormInputLabel>
    )}
  </GroupContainer>
);

export default FormInput;
