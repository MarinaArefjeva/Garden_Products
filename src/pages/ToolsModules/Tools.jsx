import React from "react";
import styles from "./Tools.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/reused/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useLocation } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import CustomButton from "../../components/reused/Buttons/Button";
import Line from "../../components/reused/Buttons/Line";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import { useDispatch, useSelector } from "react-redux";
import { useFilterByDiscount } from "../../hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";
import {
  productsSelector,
  setProducts,
} from "../../store/slices/ProductsSlices";

export default function Tools() {
  const location = useLocation();
  const { state } = location;
  const { data: allProducts } = useGetToolsQuery(state.id);
  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter,
  } = useFilterByDiscount(allProducts && allProducts.data, "discont_price");
  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(filteredListByDiscount);
  const { onSort, sortedList, sortMode } = useFilterBySorted(
    filteredList,
    "price"
  );

  return (
    <div className={styles.container}>
      <>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
      </>

      <h1 className={styles.title}>Discounted items</h1>

      <div className={styles.form_container}>
        <Price_filter
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <Discounted_filter
          type="checkbox"
          checked={filterValue}
          onChange={onFilter}
        />
        <Sorted_filter sortProducts={onSort} sortMode={sortMode} />
      </div>
      <ProductCart arr={sortedList} />
    </div>
  );
}
