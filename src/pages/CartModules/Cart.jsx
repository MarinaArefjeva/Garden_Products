import React from "react";
import styles from "./Cart.module.css";
import Line from "../../assets/images/categories/Line.svg";
import secateurs from "../../assets/images/sale/secateurs.svg";
import x from "../../assets/images/item/x.svg";
import CartButton from "../../components/CartButton/CartButton";
import OrderForm from "../../components/OrderForm/OrderForm";

const Cart = ({ cart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>Back to the store</button>
      </div>
      <div className={styles.img_orderform}>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <img className={styles.secateurs} src={secateurs} />
          </div>

          <div className={styles.cart_product}>
            <div className={styles.product_item}>
              <h2 className={styles.product_title}>Secateurs</h2>
              <button className={styles.close}>
                <img className={styles.x} src={x} />
              </button>
            </div>

            <div className={styles.cart_item}>
              <CartButton />

              <div className={styles.price_container}>
                <span className={styles.sale_price}> $155</span>
                <span className={styles.full_price}> $240</span>
              </div>
            </div>
          </div>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};

export default Cart;
