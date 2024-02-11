import React from "react";
import styles from "./Allproducts.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/reused/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useGetAllProductsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  setProducts,
} from "../../store/slices/ProductsSlices";
import { useFilterByDiscount } from "../../hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";

export default function Allproducts() {
  const { products: allProducts } = useSelector(productsSelector);
  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter,
  } = useFilterByDiscount(allProducts, "discont_price");
  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(filteredListByDiscount);
  const { onSort, sortedList, sortMode } = useFilterBySorted(
    filteredList,
    "price"
  );

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="All products" className={styles.second_button} />
      </div>

      <h1 className={styles.title}>All products</h1>

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
