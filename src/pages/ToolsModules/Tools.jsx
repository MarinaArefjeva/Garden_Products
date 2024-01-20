import React, { useEffect, useState } from "react";
import styles from "./Tools.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { API_URL } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../storage/Slice/productsSlice";
import { useGetToolsQuery } from "../../API/Products_api";

const initAllproducts = [];

export default function Tools({ first }) {
  //   const [first, setfirst] = useState("");
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getProducts());
  //   }, [dispatch]);

  //   const { products } = useSelector(({ products }) => products);
  //   const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { data: allproducts = initAllproducts } = useGetToolsQuery();
  const { category, data } = allproducts;
  //   setfirst(category)
  //   console.log(state);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.third_button}>Tools and equipment</button>
      </div>
      <h1 className={styles.title}>{}</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {/* {data.map((product) => (
          <NavLink
            to={"/Item"}
            // state={{ id: product.id, title: product.title }}
            className={styles.card}
            key={product.id}
          >
            <img className={styles.picture} src={API_URL + product.image} />
            <h2 className={styles.product_name}>{product.title}</h2>
            <p className={styles.price}>{product.price + "$"}</p>
            <p className={styles.sale_price}>{product.discont_price + "$"}</p>
          </NavLink>
        ))} */}
      </div>
    </div>
  );
}
