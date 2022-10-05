import React from 'react'
import fbLogo from '../images/facebook-logo.svg'
import styles from '../componentsCss/intro.module.css'

const Intro = () => {
  return (
    <div className={styles.intro}>
        <div className={styles.introLogo}>
            <img src={fbLogo} alt="facebook" />
        </div>
        <div className={styles.introText}>
            <p>Connect with friends and the world around you on Facebook</p>
        </div>
    </div>
  )
}

export default Intro