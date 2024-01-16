import React from "react";
import styles from "../BasketModules/Basket.module.css";
import Line from "../../assets/images/categories/Line.svg";

export default function Basket() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping cart</h1>
      <img className={styles.Line} src={Line} />
      <button className={styles.button}>Back to the store</button>
    </div>
  );
}
