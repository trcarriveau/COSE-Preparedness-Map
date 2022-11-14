import React from "react";
import User from "./User";

const Users = ({ users, getUserId, searchResults }) => {
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

  return (
    <div>
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <User
            name={user.username}
            role={user.role}
            id={user._id}
            getUserId={getUserId}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Users;
