import React from "react";
import styles from "../ItemModules/Item.module.css";
import Line from "../../components/reused/Buttons/Line";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../API/Products_api";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import CartButton from "../../components/reused/CartButton/CartButton";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import { addOrIncrementProduct } from "../../store/slices/CartSlices";
import { useDispatch } from "react-redux";
const initProducts = [];
// const initCategories = [];

export default function Item({ product }) {
  const location = useLocation();
  const { state } = location;
  const { data: initProducts } = useGetProductQuery(state.id);
  const dispatch = useDispatch();
  const addProduct = (productAdd) => {
    dispatch(addOrIncrementProduct(productAdd));
  };
  // const newCart = cart;
  // console.log(newCart);
  // const { data: category = initCategories } = useGetCategoriesQuery();
  // const newCategory = category;
  // const categoryName = () => newCategory[newCart[0].categoryId - 1].title;
  // console.log(categoryName());

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
        <Line />
        <CustomButton title="Product" className={styles.fourth_button} />
      </div>

      {initProducts
        ? initProducts.map((product) => (
            <div key={product.id} className={styles.item}>
              <img className={styles.picture} src={API_URL + product.image} />
              <div className={styles.description_container}>
                <h1 className={styles.title}>{product.title}</h1>
                <div>
                  {product.discont_price ? (
                    <>
                      <p className={styles.sale_price}>
                        {product.discont_price + "$"}
                      </p>
                      <p className={styles.price}>{product.price + "$"}</p>
                    </>
                  ) : (
                    <p className={styles.sale_price}>{product.price + "$"}</p>
                  )}
                </div>

                <div className={styles.button_container}>
                  <CartButton product={product} />
                  <button
                    onClick={() => addProduct(product)}
                    className={styles.button_add}
                  >
                    Add to cart
                  </button>
                </div>

                <div className={styles.about_product}>
                  <h2 className={styles.subtitle}>Description</h2>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.text}>Read more</p>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
