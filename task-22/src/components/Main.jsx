import React from 'react'
import Form from './Form'
import Intro from './Intro'
import styles from '../componentsCss/main.module.css'

const Main = () => {
  return (
    <main className={styles.mainSection}>
        <Intro />
        <Form />
    </main>
  )
}

export default Main