import React from "react";
import styles from "./Categories.module.css";
import Line from "../../../assets/images/categories/Line.svg";

export default function Categories() {
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.objects}>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All categories </button>
      </div>

      <div className={styles.pictures}></div>
    </div>
  );
}
