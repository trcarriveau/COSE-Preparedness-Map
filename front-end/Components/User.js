import React from "react";
import { useState } from "react";

const User = ({ name, role, id, getUserId }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = (getUserId) => {
    setIsActive((current) => !current);
    console.log({ id });
    getUserId(id);
  };

  //TODO: Change background color toggles
  return (
    <div
      style={{
        backgroundColor: isActive ? "blue" : "green",
      }}
      //onClick={onDelete}
      onClick={() => getUserId(id)}
      //onClick={clickHandler(getUserId)}
    >
      {name} {role} {id}
    </div>
  );
};

export default User;
