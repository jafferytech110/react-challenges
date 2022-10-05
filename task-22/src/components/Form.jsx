import React from 'react'
import styles from '../componentsCss/form.module.css'

const Form = () => {
  return (
    <div className={styles.fb}>
        <form className={styles.fbForm}>
            <input type="text" placeholder='Email or phone number' required />
            <input type="password" placeholder='Password' required />
            <button id={styles.login} type='submit'>Log In</button>
            <button id={styles.forgot}>Forgot password?</button>
            <div className={styles.line}></div>
            <button id={styles.signUp}>create new account</button>
        </form>
        <p className={styles.page}><a href="/">Create a Page</a> for a celebrity, brand or business.</p>
    </div>
  )
}

export default Form