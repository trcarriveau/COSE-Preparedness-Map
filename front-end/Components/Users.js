import React from "react";
import User from "./User";
// const users = [
//     {
//       username: "user1",
//       email: "email1",
//       password: "passwd1",
//       role: "user",
//     },

//     {
//         username: "user2",
//         email: "email2",
//         password: "passwd2",
//         role: "user",
//     },
//     {
//         username: "user3",
//         email: "email3",
//         password: "passwd3",
//         role: "user",
//     },
//     {
//         username: "user4",
//         email: "email4",
//         password: "passwd4",
//         role: "admin",
//     },
//   ]

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
        <React.Fragment key={user.id}>
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
