import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../assets/images/tools/Line.svg";
import { useGetProductQuery } from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import minus from "../../assets/images/item/minus.svg";
import number from "../../assets/images/item/number.svg";
import plus from "../../assets/images/item/plus.svg";
const initProducts = [];

export default function Item() {
  const location = useLocation();
  const { state } = location;
  const { data: cart = initProducts } = useGetProductQuery(state.id);
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.third_button}>Tools and equipment</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.fourth_button}>Secateurs</button>
      </div>

      {cart.map((product) => (
        <div className={styles.item}>
          <img className={styles.picture} src={API_URL + product.image} />
          <div>
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.sale_price}>{product.price + "$"}</span>
            <span className={styles.full_price}>
              {product.dicont_price + "$"}
            </span>
            <div className={styles.buttons}>
              <button className={styles.minuss_button}>
                <img className={styles.minus} src={minus} />
              </button>
              <img className={styles.quantity} src={number} />

              <button className={styles.plus_button}>
                <img className={styles.plus} src={plus} />
              </button>
              <button className={styles.cart_button}>Add to cart</button>
            </div>

            <div className={styles.about_product}>
              <h2 className={styles.subtitle}>Description</h2>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.text}>Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
