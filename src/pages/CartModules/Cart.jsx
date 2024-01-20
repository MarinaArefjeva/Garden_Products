import React from "react";
import styles from "./Cart.module.css";
import Line from "../../assets/images/categories/Line.svg";

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>Back to the store</button>
      </div>

      <div className={styles.img_form_container}>
        <div className={styles.container_form}>
          <h2 className={styles.subtitle}>Order details</h2>
          <p className={styles.items}>items</p>
          <input className={styles.input_order_form} placeholder="Name" />
          <input
            className={styles.input_order_form}
            placeholder="Phone number"
          />
          <input className={styles.input_order_form} placeholder="Email" />
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </div>
  );
}
