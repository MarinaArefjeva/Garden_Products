import React from "react";
import styles from "./Sale.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import Bridge from "../../../assets/images/sale/Bridge.svg";

export default function Sale() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Sale</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All sales </button>
      </div>

      <div className={styles.container_cards}>
        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <div className={styles.text}>
            <h2 className={styles.title}>Decorative forged bridge</h2>
            <span className={styles.sale_price}>$500</span>
            <span className={styles.price}>$1000</span>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <div className={styles.text}>
            <h2 className={styles.title}>Decorative forged bridge</h2>
            <span className={styles.sale_price}>$500</span>
            <span className={styles.price}>$1000</span>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <div className={styles.text}>
            <h2 className={styles.title}>Decorative forged bridge</h2>
            <span className={styles.sale_price}>$500</span>
            <span className={styles.price}>$1000</span>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <div className={styles.text}>
            <h2 className={styles.title}>Decorative forged bridge</h2>
            <span className={styles.sale_price}>$500</span>
            <span className={styles.price}>$1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
