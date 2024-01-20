import React from "react";
import styles from "./Filtration.module.css";

export default function Discounted_filter() {
  return (
    <label>
      <input type="checkbox" className={styles.checkbox} />
      Discounted items
    </label>
  );
}
