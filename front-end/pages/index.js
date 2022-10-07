import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Colors from '../Components/Colors'
import Button from '../Components/Button';


export default function Home() {
  
  //example function that can be passed in a button component
  //example on line 74
  const onClickExample = () => {
    console.log("clicked")
  }


  return (
    <div className={styles.body}>
      <Image
        src="/../public/huskies_logo.png"
        layout="fill"
        objectFit='contain'
      />
      <div className={styles.container}>
        <form id="login">
          <div>
            <h1 className={styles.title}>Login</h1>
            <hr style={{ color: 'white'}} />
          </div>
          <p className={styles.textInputTitle}>
              Username or Email:
          </p>
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
          <p className={styles.textInputTitle}>
              Password:
          </p>    
          <div className={styles.group}>
              <input 
                type="password" 
                className={styles.input1} 
                autoFocus 
                placeholder="Minimum length 8 characters" 
                // id =""
                // name = "" 
                required
                minLength={8}
              />
          </div>
          <button 
            className={styles.button3} 
            style={{backgroundColor: Colors.button}} 
            type="submit"
          >  
            Sign In
          </button>
        </form>
        <p className={styles.text}>
            Forgot Password? 
        </p>
        <Button
          color={Colors.button}
          text = {'Reset Password'}
          onClick = {onClickExample}
          />
        <p className={styles.text}>
            Don't have an account?
        </p>
        <Link href="/registration" passHref >
          <Button
            color={Colors.button}
            text = {'Register'}
          />
        </Link> 
      </div>
    </div>
  )
}
