import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../components/Buttons/Line";
import { useGetProductQuery } from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import CartButton from "../../components/CartButton/CartButton";
import MainPage_button from "../../components/Buttons/MainPage_button";
import CustomButton from "../../components/Buttons/Button";
const initProducts = [];

export default function Item() {
  const location = useLocation();
  const { state } = location;
  const { data: cart = initProducts } = useGetProductQuery(state.id);

  return (
    <div className={styles.container}>
      <div>
        <MainPage_button />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
        <Line />
        <CustomButton title="Annuals" className={styles.fourth_button} />
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
              <CartButton />
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
