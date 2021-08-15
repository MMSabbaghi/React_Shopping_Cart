import React, { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./FilterProduts.module.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import SelectComponent from "../../Common/SelectComponent/SelectComponent";

const FilterProducts = () => {
  const [sort, setSort] = useState({ value: "", label: "..." });
  const [size, setsize] = useState({ value: "", label: "All Sizes" });
  const dispatch = useProductsActions();

  const sizeOptions = [
    { value: "", label: "All Sizes" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const sortOptions = [
    { value: "", label: "..." },
    { value: "price", label: "Price" },
    { value: "title", label: "Name" },
  ];

  const sortHandler = (selectedValue) => {
    dispatch({ type: "sortProducts", value: selectedValue.value });
    setSort(selectedValue);
  };

  const changeSizeHandler = (selectedValue) => {
    dispatch({ type: "filterBySize", value: selectedValue.value });
    setsize(selectedValue);
    //If the select element for sorting has a value , sorting is also performed by that value
    sortHandler(sort);
  };

  const searchHandler = (e) => {
    //Apply filters
    changeSizeHandler(size);

    dispatch({ type: "searchProducts", value: e.target.value });
  };

  return (
    <>
      <div className={styles.search_bar}>
        <SearchBar onInputChange={searchHandler} />
      </div>

      <div className={styles.filter_box}>
        <span className={styles.title}> Filter Products : </span>
        <SelectComponent
          value={sort}
          options={sortOptions}
          onChange={sortHandler}
          label="sort by : "
          className={styles.select}
        />
        <SelectComponent
          value={size}
          options={sizeOptions}
          onChange={changeSizeHandler}
          label="order by :"
          className={styles.select}
        />
      </div>
    </>
  );
};

export default React.memo(FilterProducts);
