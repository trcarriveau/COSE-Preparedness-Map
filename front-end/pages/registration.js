import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Registration.module.css'
import Link from 'next/link';

export default function Registration() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form id="createAccount">
              <h1 className={styles.title}>Register</h1>
              <div className={styles.group}>
                  <input type="text" id="signupUsername" className={styles.input1} autofocus placeholder="Username" />
              </div>
              <div className={styles.group}>
                  <input type="text" className={styles.input1} autofocus placeholder="Email Address" />
              </div>
              <div className={styles.group}>
                  <input type="password" className={styles.input1} autofocus placeholder="Password" />
              </div>
              <div className={styles.group}>
                  <input type="password" className={styles.input1} autofocus placeholder="Confirm password" />
              </div>
              <button className={styles.button} type="submit">Resgister</button>
              <p></p>
              <button className={styles.button2} type="submit">Cancel</button>
              <p className={styles.next}>
                  <a className={styles.link} href="" id="linkLogin">Already have an account? Sign in</a>
              </p>
          </form>
      </div>
    </div>
  )
}
