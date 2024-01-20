import React from "react";
import styles from "./Cart.module.css";
import Line from "../../assets/images/categories/Line.svg";
import secateurs from "../../assets/images/sale/secateurs.svg";

const Cart = ({ cart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>Back to the store</button>
      </div>

      <div className={styles.cart_form_container}>
        <div className={styles.cart}>
          <img className={styles.picture} src={secateurs} />
        </div>
        <div className={styles.container_form}>
          <h2 className={styles.subtitle}>Order details</h2>
          <p className={styles.items}>items</p>
          <input className={styles.input_order_form} placeholder="Name" />
          <input
            className={styles.input_order_form}
            placeholder="Phone number"
          />
          <input className={styles.input_order_form} placeholder="Email" />
          <button className={styles.cart_button}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
