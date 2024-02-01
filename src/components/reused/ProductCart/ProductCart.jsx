import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCart.module.css";
import { API_URL } from "../../../API/api";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/CartSlices";

export default function ProductCart({ arr }) {
  const dispatch = useDispatch();

  const addProductInCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <>
      {arr
        ? arr.map((product) => (
            <div className={styles.card} key={product.id}>
              <div className={styles.img_container}>
                <NavLink
                  to="/Item"
                  state={{ id: product.id, title: product.title }}
                >
                  <img
                    className={styles.picture}
                    src={API_URL + product.image}
                    alt="image"
                  />
                </NavLink>
                <button
                  className={styles.btnAdd}
                  onClick={() => addProductInCart(product)}
                >
                  Add to cart
                </button>
                {product.discont_price ? (
                  <p className={styles.discont}>
                    {`- ${Math.ceil(
                      100 - product.discont_price / (product.price / 100)
                    )} %`}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className={styles.text}>
                <p className={styles.product_title}>{product.title}</p>
                {product.discont_price ? (
                  <div className={styles.prices}>
                    <p className={styles.sale_price}>
                      {product.discont_price + "$"}
                    </p>
                    <p className={styles.price}>{product.price + "$"}</p>
                  </div>
                ) : (
                  <p className={styles.sale_price}>{product.price + "$"}</p>
                )}
              </div>
            </div>
          ))
        : ""}
    </>
  );
}
