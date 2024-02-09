import React from "react";
import styles from "./Cart.module.css";
import Line from "../../assets/images/categories/Line.svg";
import x from "../../assets/images/item/x.svg";
import CartButton from "../../components/reused/CartButton/CartButton";
import CartForm from "../../components/CartForm/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, removeProduct } from "../../store/slices/CartSlices";
import { API_URL } from "../../API/api";

const Cart = () => {
  const { cart: cartProducts } = useSelector(cartSelector);

  const allPrice = cartProducts.map((product) => {
    if (product.discont_total_price) {
      return product.discont_total_price;
    }
    return product.total_price;
  });

  const totalAmount = allPrice
    .reduce((total, value) => total + value, 0)
    .toFixed(2);

  const dispatch = useDispatch();

  const removeProductInCart = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>Back to the store</button>
      </div>

      <div className={styles.img_orderform}>
        <div className={styles.carts}>
          {cartProducts
            ? cartProducts.map((product) => (
                <div key={product.id} className={styles.cart_container}>
                  <img
                    className={styles.picture}
                    src={API_URL + product.image}
                  />

                  <div className={styles.cart_product}>
                    <div className={styles.product_item}>
                      <h2 className={styles.product_title}>{product.title}</h2>
                      <button className={styles.close}>
                        <img
                          onClick={() => removeProductInCart(product)}
                          className={styles.x}
                          src={x}
                        />
                      </button>
                    </div>

                    <div className={styles.cart_item}>
                      <CartButton product={product} />

                      <div className={styles.price_container}>
                        {product.discont_total_price ? (
                          <>
                            <p className={styles.sale_price}>
                              {product.discont_total_price + "$"}
                            </p>
                            <p className={styles.full_price}>
                              {product.total_price + "$"}
                            </p>
                          </>
                        ) : (
                          <p className={styles.sale_price}>
                            {product.total_price + "$"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <CartForm price={totalAmount} />
      </div>
    </div>
  );
};

export default Cart;
