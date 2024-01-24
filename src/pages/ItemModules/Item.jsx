import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../assets/images/tools/Line.svg";
import { useGetProductQuery } from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import CartButton from "../../components/CartButton/CartButton";
import MainPage_button from "../../components/Buttons/MainPage_button";
import Categories_button from "../../components/Buttons/Categories_button";
import Tools_button from "../../components/Buttons/Tools_button";

const initProducts = [];

export default function Item() {
  const location = useLocation();
  const { state } = location;
  const { data: cart = initProducts } = useGetProductQuery(state.id);
  return (
    <div className={styles.container}>
      <MainPage_button />
      <Categories_button />
      <img className={styles.Line} src={Line} />
      <Tools_button />

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
