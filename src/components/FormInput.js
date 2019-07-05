import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input type={otherProps.name} className="form-input" onChange={handleChange} {...otherProps} />
    {
      label && <label
        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`} >
        {label}
      </label>
    }
  </div>
);

export default FormInput;