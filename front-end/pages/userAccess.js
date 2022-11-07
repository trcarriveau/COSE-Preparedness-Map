import styles from "../styles/userAccess.module.css";
import User from "../components/User";
import Users from "../components/Users";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { icons } from "react-icons/lib";

import { useState, useMemo, useEffect } from "react";
import SearchBar from "../Components/SearchBar";

export default function userAccess() {
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3080/user_access");
        const userList = await response.json();
        setUsers(userList);
        console.log(userList);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (async () => await fetchUsers())();
  }, []);
  //array and function for setting user selection based on userID
  const [selectedUserId, setSelectedUserId] = useState();
  const selectedUser = useMemo(
    () => users.find((user) => user.id === selectedUserId),
    [users, selectedUserId]
  );

  const [searchResults, setSearchResults] = useState(users);

  const [searchedUser, setSearchedUser] = useState([]);

  const getUserId = (id) => {
    //setSelectedUserId(id);
    console.log("In selectUser, id is: ", id);
    setSelectedUserId(id);
  };

  const toggleRole = ({ user }) => {
    /* if (user.role === "admin") {
      user.role = "user";
    } else if (user.role === "user") {
      user.role = "admin";
    }*/
    console.log("click");
  };

  const deleteUser = (id) => {
    console.log("delete", id);
  };

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => setSearchedUser(e.target.value);
  useEffect(() => {
    const results = users.filter((o) => o.username.includes(searchedUser));
    setSearchResults(results);
  }, [users, searchedUser]);

  return (
    <div className={styles.container}>
      SearchBar1
      <form className="search" onSubmit={handleSubmit}>
        <input
          //className={search_input}
          type="text"
          id="search"
          onChange={handleChange}
        />
        <button>
          <GiMagnifyingGlass />
        </button>
        {searchedUser}
      </form>
      {/* <SearchBar users={users} setSearchResults={setSearchResults} /> */}
      <div className={styles.usercontainer}>
        <h3> Users</h3>
        {searchResults && <Users users={searchResults} getUserId={getUserId} />}
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.arrow}>
          <MdOutlineArrowBackIosNew onClick={toggleRole} />
        </div>
        <div className={styles.arrow}>
          <MdArrowForwardIos />
        </div>
      </div>
      <div className={styles.usercontainer}>
        <h3> Admin</h3>
        <Users users={admins} />
      </div>
    </div>
  );
}
