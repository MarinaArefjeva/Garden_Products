import React from "react";
import styles from "./OrderForm.module.css";
import products from "../../../assets/images/order.form/products.svg";

export default function OrderForm() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>5% off on the first order</p>

      <div className={styles.img_form_container}>
        <img className={styles.products} src={products} />

        <div className={styles.container_form}>
          <input className={styles.input_order_form} placeholder="Name" />
          <input
            className={styles.input_order_form}
            placeholder="Phone number"
          />
          <input className={styles.input_order_form} placeholder="Email" />
          <button className={styles.button}>Get a discount</button>
        </div>
      </div>
    </div>
  );
}
