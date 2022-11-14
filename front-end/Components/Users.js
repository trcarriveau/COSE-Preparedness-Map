import React from "react";
import User from "./User";
import { useState } from "react";

const Users = ({ users, getUserId }) => {
  // const results = users.map((user) => (
  //   <User
  //     key={user.id}
  //     name={user.username}
  //     role={user.role}
  //     id={user._id}
  //     getUserId={getUserId}
  //   />
  // ));

  // const content = users?.length ? users : <p> No Matching Users</p>;
  const [chosen, setChosen] = useState(false);

  return (
    <div>
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <User
            name={user.username}
            role={user.role}
            id={user._id}
            getUserId={getUserId}
            active={user === chosen}
            onClick={() => setChosen(user)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Users;
