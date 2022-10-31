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

const Users = ({ users, getUserId }) => {
  return (
    <div>
      {users.map((user) => (
        <>
          <User
            name={user.username}
            role={user.role}
            id={user._id}
            getUserId={getUserId}
          />
        </>
      ))}
    </div>
  );
};

export default Users;
