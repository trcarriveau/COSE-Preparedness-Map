import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";

//our components
import Colors from "../Components/Colors";
import Button from "../Components/Button";

//icons
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function Home() {
  const router = useRouter() 

  //example function that can be passed in a button component
  //example on line 92
  const onClickExample = () => {
    console.log("clicked");
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
    setMessage();
    console.log("handle change user: ", user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("before send user is", user);

    try {
      let res = await fetch("http://localhost:3080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let resJson = await res.json();
      console.log("This is the response message", resJson);
      if (res.status >= 200 && res.status < 300) {
        setMessage(resJson.message);
        console.log("Range 200-300", resJson);
        //TODO Redirect to map
        router.push('/map')
        //TODO Username as a cookie
      } else if (res.status >= 400 && res.status < 500) {
        setMessage(resJson.errorMessage);
        console.log("Range 400-500", message);
      } else {
        setMessage("Range outside defined ranges", resJson.message);
      }
    } catch (err) {
      //console.log(err);
    }
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
        <form id="login" onSubmit={handleSubmit}>
          <p className={styles.textInputTitle}>Username or Email:</p>
          <div className={styles.group}>
            <input
              type="text"
              name="username"
              id="username"
              className={styles.input1}
              autoFocus
              placeholder="Username or email"
              value={user.username || ""}
              onChange={handleChange}
              required
            />
          </div>
          <p className={styles.textInputTitle}>Password:</p>
          <div className={styles.group}>
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              className={styles.input1}
              placeholder="Minimum length 8 characters"
              value={user.password || ""}
              onChange={handleChange}
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
          <h2 className={styles.textError} style={{ color: Colors.text_error }}>{message}</h2>
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
        <p className={styles.text} >Don't have an account?</p>
        <Link href="/registration" passHref>
          <Button color={Colors.button} text={"Register"} />
        </Link>
      </div>
    </div>
  );
}
