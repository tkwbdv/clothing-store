import React from "react";
import MenuItem from "./MenuItem";
import DIRECTORY_DATA from "../data/directory-data";

const Directory = () => {

  return (
    <div className="directory-menu">
      {DIRECTORY_DATA.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;