import React, { useEffect } from "react";
import styles from "./Allproducts.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../storage/Slice/productsSlice";
import { useGetAllProductsQuery } from "../../API/Products_api";

const initAllproducts = [];

export default function Allproducts() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // const { products } = useSelector(({ products }) => products);
  const { data: allproducts = initAllproducts } = useGetAllProductsQuery();

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>All products</button>
      </div>
      <h1 className={styles.title}>All products</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {allproducts.map((products) => (
          <NavLink
            to="/Item"
            state={{ id: products.id, title: products.title }}
            className={styles.card}
            key={products.id}
          >
            <img className={styles.picture} src={API_URL + products.image} />
            <h2 className={styles.product_name}>{products.title}</h2>
            <span className={styles.price}>{products.price + "$"}</span>
            <span className={styles.sale_price}>
              {products.discont_price + "$"}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
