import React, { useEffect, useMemo } from "react";
import styles from "./Allsales.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import CustomButton from "../../components/reused/Buttons/Button";
import { useSelector } from "react-redux";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";
import { productsSelector } from "../../store/slices/ProductsSlices";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";

let initProduct = [];

export default function Allsales() {
  const { products: allSalesProducts } = useSelector(productsSelector);
  useEffect(() => {
    initProduct = allSalesProducts.filter((product) => product.discont_price);
  }, []);

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(initProduct);
  const { onSort, sortedList, sortMode } = useFilterBySorted(
    filteredList,
    "price"
  );

  return (
    <div className={styles.container}>
      <NavigationPath />
      <CustomButton title="All sales" className={styles.second_button} />

      <h1 className={styles.title}>All sales</h1>

      <div className={styles.form_container}>
        <Price_filter
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <Sorted_filter sortProducts={onSort} sortMode={sortMode} />
      </div>

      <ProductCart arr={sortedList} />
    </div>
  );
}
