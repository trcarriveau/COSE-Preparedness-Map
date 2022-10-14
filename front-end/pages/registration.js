import Image from "next/image";
import styles from "../styles/Registration.module.css";
import Link from "next/link";
import Colors from "../Components/Colors";
import Button from "../Components/Button";
import RegistrationForm from "../Components/RegistrationForm";
import { useState } from "react";

//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

//TODO:
// More form validation
// Password matching hook
// Toggle password visbility icon

export default function Registration({msg}) {
  
  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // }

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    }

    console.log('Data:');
    console.log(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log('options:')
    console.log(options)

    const res = await fetch('http://localhost:3080/registration', options)
    const msg = await res.text()
    console.log('msg:')
    console.log(msg)

    return {
      props: {
        msg: msg
      }
    }

  }

  

  return (
    <div className={styles.body}>
      <Image
        src="/../public/huskies_logo.png"
        layout="fill"
        objectFit="contain"
      />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Register</h1>
          <hr style={{ color: "white" }} />
        </div>
        <h2>{msg}</h2>
        <RegistrationForm/>
        {/* <form id="createAccount" onSubmit={handleSubmit}>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Username:</p>
            <input
              type="text"
              id="username"
              className={styles.input1}
              autoFocus
              placeholder="Username"
              required
            />
          </div>
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Email:</p>
            <input
              type="email"
              id="email"
              className={styles.input1}
              placeholder="Email Address"
              required
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
                  onClick={togglePassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles.inputIcon}
                  size="35px"
                  color={Colors.button}
                  onClick={togglePassword}
                />
              )}
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              className={styles.input1}
              placeholder="Minimum length 8 characters"
              required
              minLength={8}
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
                  onClick={togglePassword}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles.inputIcon2}
                  size="35px"
                  color={Colors.button}
                  onClick={togglePassword}
                />
              )}
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              id="confirmPassword"
              className={styles.input1}
              placeholder="Confirm password"
              required
              minLength={8}
            />
          </div>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form> */}
        <p className={styles.text} >Already have an account? Sign in</p>
        <Link href="/" passHref>
          <Button color={Colors.button} text={"Cancel"} />
        </Link>
      </div>
    </div>
  );
}
