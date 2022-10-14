import React, { Component } from "react";
import Colors from "./Colors";
import styles from "../styles/Registration.module.css";
import { useState } from "react";
//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

// https://www.youtube.com/watch?v=x9UEDRbLhJE

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      major: "",
      messageBack: "",
      passwordShown: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    console.log("options:");
    console.log(options);
    let setResp = this;
    const res = await fetch("http://localhost:3080/registration", options);
    const msg = await res.json();
    console.log("msg: "+msg);
    console.log(msg);

    let feedback = "";

    //check to see if the msg returned is an object and if it contains the 'errors' tag.
    //We can add else if's as well to handle the successfull reponse and the 500 internal server error as well

    if (typeof msg == "object" && msg.hasOwnProperty("errors")) {
      msg.errors.forEach((err, e) => {
        feedback += `${err.msg}\n`;
      });
    } else {
      feedback += msg.errorMessage
    }
    console.log("feedback: " + feedback);
    setResp.setState({ messageBack: feedback });
  };

  // getErrorMsg = (messageBack) => {
  //   let ErrorMsg = []
  //     messageBack.forEach(error => {
  //       ErrorMsg.push(<h1>{error.msg}</h1>)
  //     });
  //     return ErrorMsg
  // }

  getErrorMsg = () => {
    let feedback = "";

    //check to see if the msg returned is an object and if it contains the 'errors' tag.
    //We can add else if's as well to handle the successfull reponse and the 500 internal server error as well
    if (typeof msg == "object" && msg.hasOwnProperty("errors")) {
      msg.errors.forEach((err, e) => {
        feedback += `${err.value}\n`;
      });
    }
  };

  //set feedback = to the variable we have for the state

  togglePassword = () => {
    this.setState((prevState) => ({
      passwordShown: !prevState.passwordShown,
    }));
    console.log(
      "in togglePassword, passwordShown: " + this.state.passwordShown
    );
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      messageBack,
      passwordShown,
    } = this.state;
    return (
      <div>
        <form id="createAccount" onSubmit={this.submitHandler}>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Username:</p>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input1}
              autoFocus
              placeholder="Username"
              required
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Email:</p>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input1}
              placeholder="Email Address"
              required
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Major:</p>
            <select
              id="major"
              name="major"
              className={styles.input1}
              placeholder="Select your Major"
            >
              <option value="" disabled selected>
                Select your Major
              </option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Placeholder 1">Placeholder 1</option>
              <option value="Placeholder 2">Placeholder 2</option>
            </select>
          </div>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>
              Password:
              {passwordShown ? (
                <AiFillEye
                  className={styles.inputIcon}
                  size="35px"
                  color={Colors.button}
                  onClick={this.togglePassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles.inputIcon}
                  size="35px"
                  color={Colors.button}
                  onClick={this.togglePassword}
                />
              )}
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              className={styles.input1}
              placeholder="Minimum length 8 characters"
              required
              minLength={8}
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>
              Confirm Password:
              {passwordShown ? (
                <AiFillEye
                  className={styles.inputIcon2}
                  size="35px"
                  color={Colors.button}
                  onClick={this.togglePassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles.inputIcon2}
                  size="35px"
                  color={Colors.button}
                  onClick={this.togglePassword}
                />
              )}
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className={styles.input1}
              placeholder="Confirm password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={this.changeHandler}
            />
          </div>
          <h2 className={styles.textError} style={{ color: Colors.text_error }}>
            {this.state.messageBack}{" "}
          </h2>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
