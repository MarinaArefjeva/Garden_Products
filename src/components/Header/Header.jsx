import React from "react";
import styles from "./Header.module.css";
import basket from "../../assets/images/header/bag.svg";
import logo from "../../assets/images/header/logo.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/slices/CartSlices";

export default function Header() {
  const { cart: cartProducts } = useSelector(cartSelector);
  return (
    <>
      <header>
        <NavLink to="/">
          <img className={styles.logo} src={logo} />
        </NavLink>
        <ul className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            Main Page
          </NavLink>
          <NavLink to="/Categories" className={styles.link}>
            Categories
          </NavLink>
          <NavLink to="/Allproducts" className={styles.link}>
            All products
          </NavLink>
          <NavLink to="/Allsales" className={styles.link}>
            All sales
          </NavLink>
        </ul>
        <NavLink to="/Cart">
          <div className={styles.basket_icon}>
            <img className={styles.basket} src={basket} />
            <div className={styles.count_product}>{cartProducts.length}</div>
          </div>
        </NavLink>
      </header>
    </>
  );
}
