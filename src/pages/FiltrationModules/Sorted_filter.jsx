import React from "react";
import styles from "./Filtration.module.css";

export default function Sorted_filter() {
  return (
    <div className={styles.sort_container}>
      <span className={styles.text}>Sorted</span>
      <span>
        <select className={styles.sort_select}>
          <option className={styles.sort_option}>By default</option>
          <option className={styles.sort_option}>By higher price </option>
          <option className={styles.sort_option}>By lower price</option>
        </select>
      </span>
    </div>
  );
}
