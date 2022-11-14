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
  const [reRender, setReRender] = useState([false]);

  //get users from backend
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
    () => users.find((user) => user._id === selectedUserId),
    [users, selectedUserId]
  );

  //these values hold the information entered in the search bar --> the query values
  const [searchResults, setSearchResults] = useState(users);
  const [searchedUser, setSearchedUser] = useState([]);

  //function passed down to retrive userID when a user is clicked
  const getUserId = (id) => {
    console.log("In selectUser, id is: ", id);
    setSelectedUserId(id);
  };

  //function to convert a user's role to admin
  const makeAdmin = () => {
    if (selectedUserId) {
      console.log("there is an id");
      selectedUser.role = "admin";
      setSelectedUserId();
      setReRender(!reRender);
    }
  };
  //function to convert a user's role to user
  const makeUser = () => {
    if (selectedUserId) {
      console.log("there is an id");
      selectedUser.role = "user";
      setSelectedUserId();
      setReRender(!reRender);
    }
  };

  //filters all users into users that have a role of user
  //these values fill the users in the left box
  const usersRoleUser = useMemo(
    () => users.filter((user) => user.role === "user"),
    [users, searchResults, reRender]
  );
  //filters all users into users that have a role of admin
  //these values fill the users in the right box
  const admins = useMemo(
    () => users.filter((user) => user.role === "admin"),
    [users, searchResults, reRender]
  );

  //functionality for the search bar text input
  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => setSearchedUser(e.target.value);
  useEffect(() => {
    const results = usersRoleUser.filter((o) =>
      o.username.includes(searchedUser)
    );
    setSearchResults(results);
  }, [users, searchedUser, reRender]);

  return (
    <div className={styles.container}>
      SearchBar1
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" id="search" onChange={handleChange} />
        <button>
          <GiMagnifyingGlass />
        </button>
        {searchedUser}
      </form>
      <div className={styles.usercontainer}>
        <h3> Users</h3>
        {searchResults && <Users users={searchResults} getUserId={getUserId} />}
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.arrow}>
          <MdArrowForwardIos onClick={makeAdmin} />
        </div>
        <div className={styles.arrow}>
          <MdOutlineArrowBackIosNew onClick={makeUser} />
        </div>
      </div>
      <div className={styles.usercontainer}>
        <h3> Admin</h3>
        {admins && <Users users={admins} getUserId={getUserId} />}
      </div>
    </div>
  );
}
