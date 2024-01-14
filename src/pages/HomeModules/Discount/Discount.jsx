import React from "react";
import styles from "./Discount.module.css";

export default function Discount() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Amazing Discounts <br /> on Garden Products!
      </h1>
      <button className={styles.button_discount}>Check out</button>
    </div>
  );
}
