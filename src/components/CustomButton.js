import React from "react";

import { CustomButtonContainer } from "../styles/components/_CustomButton";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer >
);

export default CustomButton;