import React from "react";
import styles from "./CartButton.module.css";
import minus from "../../../assets/images/item/minus.svg";
import plus from "../../../assets/images/item/plus.svg";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
} from "../../../store/slices/CartSlices";

export default function CartButton({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  const increment = (productId) => {
    // dispatch(incrementProduct(productId));
  };

  const decrement = (productId) => {
    // dispatch(decrementProduct(productId));
  };

  return (
    <div className={styles.button_container}>
      <button
        onClick={() => decrement(product.id)}
        className={styles.minus_button}
      >
        <img className={styles.minus} src={minus} />
      </button>
      <div className={styles.count}>1</div>
      <button
        onClick={() => increment(product.id)}
        className={styles.plus_button}
      >
        <img className={styles.plus} src={plus} />
      </button>
    </div>
  );
}
