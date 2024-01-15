import React from "react";
import styles from "./Tools.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../FiltrationModules/Price_filter";
import Discounted_filter from "../FiltrationModules/Discounted_filter";
import Sorted_filter from "../FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";

const initTools = [];
export default function Tools() {
  const { data: Tools = initTools } = useGetToolsQuery();
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.third_button}>Tools and equipment</button>
      </div>
      <h1 className={styles.title}>Tools and equipment</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {Tools.map((tools) => (
          <div className={styles.card} key={tools.id}>
            <img className={styles.picture} src={API_URL + tools.image} />
            <h2>{tools.title}</h2>
            <p>{tools.price + "$"}</p>
            <p>{tools.discont_price + "$"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
