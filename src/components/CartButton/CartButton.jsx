import React from "react";
import styles from "./CartButton.module.css";
import minus from "../../assets/images/item/minus.svg";
import plus from "../../assets/images/item/plus.svg";

export default function CartButton() {
  return (
    <div className={styles.button_container}>
      <button className={styles.minus_button}>
        <img className={styles.minus} src={minus} />
      </button>
      <div className={styles.count}>1</div>
      <button className={styles.plus_button}>
        <img className={styles.plus} src={plus} />
      </button>
    </div>
  );
}
