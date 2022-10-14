import Image from "next/image";
import styles from "../styles/Registration.module.css";
import Link from "next/link";
import Colors from "../Components/Colors";
import Button from "../Components/Button";
import RegistrationForm from "../Components/RegistrationForm";


//TODO:
// Password matching hook

export default function Registration({ msg }) {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    console.log("Data:");
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log("options:");
    console.log(options);

    const res = await fetch("http://localhost:3080/registration", options);
    const msg = await res.text();
    console.log("msg:");
    console.log(msg);

    return {
      props: {
        msg: msg,
      },
    };
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
        <h2>{msg}</h2>
        <RegistrationForm />
        <p className={styles.text}>Already have an account? Sign in</p>
        <Link href="/" passHref>
          <Button color={Colors.button} text={"Cancel"} />
        </Link>
      </div>
    </div>
  );
}
