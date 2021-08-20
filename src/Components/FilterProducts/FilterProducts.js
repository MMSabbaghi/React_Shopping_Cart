import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import styles from "./FilterProduts.module.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import SelectComponent from "../../Common/SelectComponent/SelectComponent";

const FilterProducts = ({ products, setFilteredProducts }) => {
  const [sort, setSort] = useState({ value: "", label: "..." });
  const [size, setSize] = useState({ value: "", label: "All Sizes" });
  const [query, setQuery] = useState("");

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

  const filterBySize = useCallback(
    (products) => {
      if (size.value === "") {
        return products;
      }
      return products.filter((p) => p.availableSizes.indexOf(size.value) >= 0);
    },
    [size]
  );

  const searchProducts = useCallback(
    (products) => {
      return products.filter(
        (p) => p.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
    },
    [query]
  );

  const sortProducts = useCallback(
    (products) => {
      return _.orderBy(products, sort.value, "asc");
    },
    [sort]
  );

  const filterProducts = useCallback(() => {
    let filteredProduts = [...products];
    filteredProduts = filterBySize(filteredProduts);
    filteredProduts = searchProducts(filteredProduts);
    filteredProduts = sortProducts(filteredProduts);

    return filteredProduts;
  }, [products, filterBySize, searchProducts, sortProducts]);

  useEffect(() => {
    setFilteredProducts(filterProducts(products));
  }, [size, sort, query, products, filterProducts, setFilteredProducts]);

  return (
    <>
      <div className={styles.search_bar}>
        <SearchBar
          onInputChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>

      <div className={styles.filter_box}>
        <span className={styles.title}> Filter Products : </span>
        <SelectComponent
          value={sort}
          options={sortOptions}
          onChange={(selectedValue) => setSort(selectedValue)}
          label="sort by : "
          className={styles.select}
        />
        <SelectComponent
          value={size}
          options={sizeOptions}
          onChange={(selectedValue) => setSize(selectedValue)}
          label="order by :"
          className={styles.select}
        />
      </div>
    </>
  );
};

export default FilterProducts;
