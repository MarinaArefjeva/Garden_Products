import React from "react";
import styles from "./CartButton.module.css";
import minus from "../../../assets/images/item/minus.svg";
import plus from "../../../assets/images/item/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrIncrementProduct,
  cartSelector,
  decrementProduct,
} from "../../../store/slices/CartSlices";

export default function CartButton({ product }) {
  const dispatch = useDispatch();
  const { cart: cartProducts } = useSelector(cartSelector);
  let current = cartProducts.filter((el) => el.id == product.id);
  let [currentProduct] = current;

  const increment = (productId) => {
    dispatch(addOrIncrementProduct(productId));
  };

  const decrement = (productId) => {
    dispatch(decrementProduct(productId));
  };
  return (
    <div className={styles.button_container}>
      <button
        onClick={() => decrement(product.id)}
        className={styles.minus_button}
      >
        <img className={styles.minus} src={minus} />
      </button>
      <p className={styles.count}>
        {currentProduct ? currentProduct.count : 0}
      </p>
      <button onClick={() => increment(product)} className={styles.plus_button}>
        <img className={styles.plus} src={plus} />
      </button>
    </div>
  );
}
