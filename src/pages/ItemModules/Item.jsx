import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../components/reused/Buttons/Line";
import { useGetProductQuery } from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import CartButton from "../../components/reused/CartButton/CartButton";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
const initProducts = [];

export default function Item({ product }) {
  const location = useLocation();
  const { state } = location;
  const { data: cart = initProducts } = useGetProductQuery(state.id);

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
        <Line />
        <CustomButton title="Product" className={styles.fourth_button} />
      </div>

      {cart.map((product) => (
        <div className={styles.item}>
          <img className={styles.picture} src={API_URL + product.image} />
          <div>
            <h1 className={styles.title}>{product.title}</h1>

            {product.discont_price ? (
              <>
                <p className={styles.sale_price}>
                  {product.discont_price + "$"}
                </p>
                <p className={styles.price}>{product.price + "$"}</p>
              </>
            ) : (
              <p className={styles.sale_price}>{product.price + "$"}</p>
            )}
          </div>

          <div className={styles.buttons}>
            <CartButton />
          </div>

          <div className={styles.about_product}>
            <h2 className={styles.subtitle}>Description</h2>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.text}>Read more</p>
          </div>
        </div>
      ))}
    </div>
  );
}
