import React from "react";
import styles from "./Header.module.css";
import basket from "../../assets/images/header/bag.svg";
import logo from "../../assets/images/header/logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <img className={styles.logo} src={logo} />
        <ul className={styles.nav}>
          <li className={styles.link}>Main Page</li>
          <li className={styles.link}>Categories</li>
          <li className={styles.link}>All products</li>
          <li className={styles.link}>All sales</li>
        </ul>

        <img className={styles.basket} src={basket} />
      </header>
    </>
  );
}
