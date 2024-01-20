import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../assets/images/tools/Line.svg";
import { useGetProductQuery } from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";

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
        <div>
          <h1 className={styles.title}>{product.title}</h1>
          <div>
            <img src={API_URL + product.image} />
            <div>
              <p>{product.price}</p>
              <p>{product.dicont_price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
