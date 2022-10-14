import React, { Component } from 'react'
import Colors from "./Colors";
import styles from "../styles/Registration.module.css";
import { useState } from 'react';
//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

// https://www.youtube.com/watch?v=x9UEDRbLhJE




class RegistrationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			messageBack: '',
      passwordShown: false
		}
	}
  

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value})
	}

	submitHandler = async (e) => {
		e.preventDefault()
		console.log(this.state)

		const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    console.log('options:')
    console.log(options)
		let setResp = this;
		const res = await fetch('http://localhost:3080/registration', options)
    const msg = await res.text()
		console.log('msg:')
    console.log(msg)
    console.log("msg comp:"+msg.errors)
		setResp.setState({ messageBack: msg });
	}



  togglePassword = (pwState) => {
    this.setState(prevState => ({
      passwordShown: !prevState.passwordShown
    }));
    console.log("in togglePassword, passwordShown: "+this.state.passwordShown)
  } 
    
    render() {
    const { username, email, password, confirmPassword, messageBack,  passwordShown} = this.state
		return (
      <div >
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
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
        <h2 className={styles.textError} style={{color: Colors.text_error}}>{this.state.messageBack}</h2>
      </div>
		)
	}
}

export default RegistrationForm