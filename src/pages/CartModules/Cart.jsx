import React from "react";
import styles from "./Cart.module.css";
import Line from "../../assets/images/categories/Line.svg";
import secateurs from "../../assets/images/sale/secateurs.svg";
import minus from "../../assets/images/item/minus.svg";
import plus from "../../assets/images/item/plus.svg";
import x from "../../assets/images/item/x.svg";

const Cart = ({ cart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>Back to the store</button>
      </div>

      <div className={styles.cart_info}>
        <div className={styles.cart_container}>
          <div className={styles.cart_products}>
            <div className={styles.cart}>
              <img className={styles.secateurs} src={secateurs} />

              <div className={styles.cart_product}>
                <div className={styles.product_item}>
                  <h2 className={styles.product_title}>Secateurs</h2>
                  <button className={styles.close}>
                    <img className={styles.x} src={x} />
                  </button>
                </div>

                <div className={styles.cart_item}>
                  <div className={styles.button_container}>
                    <button className={styles.minus_button}>
                      <img className={styles.minus} src={minus} />
                    </button>
                    <button className={styles.count}>1</button>
                    <button className={styles.plus_button}>
                      <img className={styles.plus} src={plus} />
                    </button>
                  </div>

                  <div className={styles.price_container}>
                    <span className={styles.sale_price}> $155</span>
                    <span className={styles.full_price}> $240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cart}>
              <img className={styles.secateurs} src={secateurs} />

              <div className={styles.cart_product}>
                <div className={styles.product_item}>
                  <h2 className={styles.product_title}>Secateurs</h2>
                  <button className={styles.close}>
                    <img className={styles.x} src={x} />
                  </button>
                </div>

                <div className={styles.cart_item}>
                  <div className={styles.button_container}>
                    <button className={styles.minus_button}>
                      <img className={styles.minus} src={minus} />
                    </button>
                    <button className={styles.count}>1</button>
                    <button className={styles.plus_button}>
                      <img className={styles.plus} src={plus} />
                    </button>
                  </div>

                  <div className={styles.price_container}>
                    <span className={styles.sale_price}> $155</span>
                    <span className={styles.full_price}> $240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cart}>
              <img className={styles.secateurs} src={secateurs} />

              <div className={styles.cart_product}>
                <div className={styles.product_item}>
                  <h2 className={styles.product_title}>Secateurs</h2>
                  <button className={styles.close}>
                    <img className={styles.x} src={x} />
                  </button>
                </div>

                <div className={styles.cart_item}>
                  <div className={styles.button_container}>
                    <button className={styles.minus_button}>
                      <img className={styles.minus} src={minus} />
                    </button>
                    <button className={styles.count}>1</button>
                    <button className={styles.plus_button}>
                      <img className={styles.plus} src={plus} />
                    </button>
                  </div>

                  <div className={styles.price_container}>
                    <span className={styles.sale_price}> $155</span>
                    <span className={styles.full_price}> $240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container_form}>
            <h2 className={styles.subtitle}>Order details</h2>
            <div className={styles.order}>
              <p className={styles.items}> 3 items</p>
              <p className={styles.cart_order}> Total</p>
              <span className={styles.order_price}>$465</span>
            </div>

            <input className={styles.input_order_form} placeholder="Name" />
            <input
              className={styles.input_order_form}
              placeholder="Phone number"
            />
            <input className={styles.input_order_form} placeholder="Email" />
            <button className={styles.cart_button}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
