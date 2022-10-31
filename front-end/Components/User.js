import React from "react";
import { useState } from "react";

const User = ({ name, role, selectUser, id }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = (selectUser) => {
    setIsActive((current) => !current);
  };

  //TODO: Change background color toggles
  return (
    <div
      style={{
        backgroundColor: isActive ? "blue" : "green",
      }}
      onClick={clickHandler}
    >
      {name} {role} {id}
    </div>
  );
};

export default User;
