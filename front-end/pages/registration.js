import Image from "next/image";
import styles from "../styles/Registration.module.css";
import Link from "next/link";
import Colors from "../Components/Colors";
import Button from "../Components/Button";
import { useState } from "react";

//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

//TODO:
// More form validation
// Password matching hook
// Toggle password visbility icon

export default function Registration() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
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
        <form id="createAccount">
          <div className={styles.group}>
            <p className={styles.textInputTitle}>Username:</p>
            <input
              type="text"
              id="signupUsername"
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
              className={styles.input1}
              placeholder="Confirm password"
              required
              minLength={8}
            />
          </div>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
        <p className={styles.text}>Already have an account? Sign in</p>
        <Link href="/" passHref>
          <Button color={Colors.button} text={"Cancel"} />
        </Link>
     

        
      </div>
    </div>
  );
}
