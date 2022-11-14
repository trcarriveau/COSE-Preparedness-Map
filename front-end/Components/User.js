import React from "react";
import { useState } from "react";

const User = ({ name, role, id, getUserId, active, onClick }) => {
  // const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((current) => !current);
  };

  //TODO: Change background color toggles
  return (
    <div
      style={{
        backgroundColor: active ? "blue" : "green",
      }}
      //onClick={onDelete}
      onClick={() => {
        getUserId(id);
        // clickHandler();
        onClick();
      }}
      //onClick={clickHandler(getUserId)}
    >
      Name: {name} Role: {role}
    </div>
  );
};

export default User;
