import styles from "../styles/userAccess.module.css";
import User from "../components/User";
import Users from "../components/Users";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { icons } from "react-icons/lib";

import { useState, useMemo } from "react";

export default function userAccess() {
  const [users, setUsers] = useState([
    {
      _id: "1",
      username: "user1",
      email: "email1",
      password: "passwd1",
      role: "user",
    },

    {
      _id: "2",
      username: "user2",
      email: "email2",
      password: "passwd2",
      role: "user",
    },
    {
      _id: "3",
      username: "user3",
      email: "email3",
      password: "passwd3",
      role: "user",
    },
    {
      _id: "4",
      username: "user4",
      email: "email4",
      password: "passwd4",
      role: "admin",
    },
  ]);

  const [admins, setAdmins] = useState([
    {
      _id: "5",
      username: "Admin1",
      email: "email5",
      password: "passwd5",
      role: "admin",
    },
    {
      _id: "6",
      username: "Admin2",
      email: "email6",
      password: "passwd6",
      role: "admin",
    },
  ]);

  //array and function for setting user selection based on userID
  const [selectedUserId, setSelectedUserId] = useState();
  const selectedUser = useMemo(
    () => users.find((user) => user.id === selectedUserId),
    [users, selectedUserId]
  );

  const selectUser = ({ id }) => {
    setSelectedUserId(id);
  };

  const toggleRole = ({ user }) => {
    if (user.role === "admin") {
      user.role = "user";
    } else if (user.role === "user") {
      user.role = "admin";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.usercontainer}>
        <h3> Users</h3>
        <Users users={users} selectUser={selectUser} />
      </div>
      <div className={styles.arrow}>
        <MdOutlineArrowBackIosNew /> <MdArrowForwardIos />{" "}
      </div>
      <div className={styles.usercontainer}>
        <h3> Admin</h3>
        <Users users={admins} />
      </div>
      <div>Test selectedID: {selectedUserId}</div>
    </div>
  );
}
