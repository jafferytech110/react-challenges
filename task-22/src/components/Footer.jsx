import React from "react";
import styles from "../componentsCss/footer.module.css";

const Footer = () => {

    let currentYear = new Date()

  return (
    <footer className={styles.footer}>
      <ul className={styles.langauges}>
        <li>English (US)</li>
        <li>Deutsch</li>
        <li>Spanish</li>
        <li>Italian</li>
        <li>Chinese</li>
        <li>العربية</li>
        <li>Français (France)</li>
        <li>‏اردو‏</li>
      </ul>
      <ul className={styles.options}>
        <li>Sign Up</li>
        <li>Log In</li>
        <li>Messenger</li>
        <li>Facebook Lite</li>
        <li>Watch</li>
        <li>Places</li>
        <li>Games</li>
        <li>Marketplace</li>
        <li>Meta Pay</li>
      </ul>
      <p>Meta @ {currentYear.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
