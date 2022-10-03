import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form id="login">
              <h1 className={styles.title}>Login</h1>
              <div className={styles.group}>
                  <input type="text" className={styles.input1} autofocus placeholder="Username or email" />
              </div>
              <div className={styles.group}>
                  <input type="password" className={styles.input1} autofocus placeholder="Password" />
              </div>
              <button className={styles.button} type="submit">Sign In</button>
              <p></p>
              <p className={styles.next}>
                  <a className={styles.link} href="" id="linkLogin">Don't have an account? Create account</a>
              </p>
          </form>
      </div>
    </div>
  )
}
