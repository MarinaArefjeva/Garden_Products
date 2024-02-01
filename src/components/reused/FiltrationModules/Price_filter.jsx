import React from "react";
import styles from "./Filtration.module.css";

export default function Price_filter() {
  return (
    <div className={styles.price_container}>
      <span className={styles.text}>Price</span>
      <input type="number" placeholder="from" className={styles.price_input} />
      <input type="number" placeholder="to" className={styles.price_input} />
    </div>
  );
}
