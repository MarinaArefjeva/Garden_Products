import React from "react";
import styles from "./Filtration.module.css";

export default function Discounted_filter({ ...props }) {
  return (
    <label>
      <input {...props} type="checkbox" className={styles.checkbox} />
      Discounted items
    </label>
  );
}
