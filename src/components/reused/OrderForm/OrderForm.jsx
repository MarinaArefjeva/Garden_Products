import React from "react";
import styles from "./OrderForm.module.css";

export default function OrderForm({ price }) {
  return (
    <div className={styles.cart_form}>
      <h2 className={styles.subtitle}>Order details</h2>
      <div className={styles.order}>
        <p className={styles.items}>3 items</p>
        <div className={styles.string}>
          <p className={styles.total}> Total</p>
          <p className={styles.order_price}>{`$${price}`}</p>
        </div>
      </div>
      <div className={styles.container_form}>
        <input className={styles.input_order_form} placeholder="Name" />
        <input className={styles.input_order_form} placeholder="Phone number" />
        <input className={styles.input_order_form} placeholder="Email" />
      </div>
      <button className={styles.cart_button}>Order</button>
    </div>
  );
}
