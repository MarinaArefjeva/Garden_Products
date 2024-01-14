import React from "react";
import styles from "./Header.module.css";
import basket from "../../assets/images/header/bag.svg";
import logo from "../../assets/images/header/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <img className={styles.logo} src={logo} />
        <ul className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            Main Page
          </NavLink>
          <NavLink to="/Categories" className={styles.link}>
            Categories
          </NavLink>
          <NavLink to="/All products" className={styles.link}>
            All products
          </NavLink>
          <NavLink to="/All sales" className={styles.link}>
            All sales
          </NavLink>
        </ul>
        <NavLink to="/basket">
          <img className={styles.basket} src={basket} />
        </NavLink>
      </header>
    </>
  );
}
