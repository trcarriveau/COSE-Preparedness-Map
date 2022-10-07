import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

//our components
import Colors from "../Components/Colors";
import Button from "../Components/Button";

//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function Home() {
  //example function that can be passed in a button component
  //example on line 74
  const onClickExample = () => {
    console.log("clicked");
  };

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
          <h1 className={styles.title}>Login</h1>
          <hr style={{ color: "white" }} />
        </div>
        <form id="login">
          <p className={styles.textInputTitle}>Username or Email:</p>
          <div className={styles.group}>
            <input
              type="text"
              className={styles.input1}
              autoFocus
              placeholder="Username or email"
              // id =""
              // name = ""
              required
            />
          </div>
          <p className={styles.textInputTitle}>Password:</p>
          <div className={styles.group}>
            <input
              type={passwordShown ? "text" : "password"}
              className={styles.input1}
              placeholder="Minimum length 8 characters"
              // id =""
              // name = ""
              required
              minLength={8}
            />
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
          </div>
          <button
            className={styles.button3}
            style={{ backgroundColor: Colors.button }}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className={styles.text}>Forgot Password?</p>
        <Button
          color={Colors.button}
          text={"Reset Password"}
          onClick={onClickExample}
        />
        <p className={styles.text}>Don't have an account?</p>
        <Link href="/registration" passHref>
          <Button color={Colors.button} text={"Register"} />
        </Link>
      </div>
    </div>
  );
}
