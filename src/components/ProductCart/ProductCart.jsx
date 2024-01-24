import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCart.module.css";
import { API_URL } from "../../API/api";

export default function ProductCart({ product }) {
  return (
    <NavLink
      to="/Item"
      state={{ id: product.id, title: product.title }}
      className={styles.card}
      key={product.id}
    >
      <img className={styles.picture} src={API_URL + product.image} />
      <div className={styles.text}>
        <p className={styles.product_title}>{product.title}</p>
        {product.discont_price ? (
          <>
            <p className={styles.sale_price}>{product.discont_price + "$"}</p>
            <p className={styles.price}>{product.price + "$"}</p>
          </>
        ) : (
          <p className={styles.sale_price}>{product.price + "$"}</p>
        )}
      </div>
    </NavLink>
  );
}
