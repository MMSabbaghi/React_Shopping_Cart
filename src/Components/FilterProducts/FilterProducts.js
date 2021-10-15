import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import styles from "./FilterProduts.module.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import SelectComponent from "../../Common/SelectComponent/SelectComponent";

const FilterProducts = ({ products, setFilteredProducts }) => {
  const [filterProps, setFilterProps] = useState({
    sort: { value: "", label: "..." },
    size: { value: "", label: "All Sizes" },
    query: "",
  });

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
      const size = filterProps.size;
      if (size.value === "") {
        return products;
      }
      return products.filter((p) => p.availableSizes.indexOf(size.value) >= 0);
    },
    [filterProps]
  );

  const searchProducts = useCallback(
    (products) => {
      return products.filter(
        (p) =>
          p.title.toLowerCase().indexOf(filterProps.query.toLowerCase()) >= 0
      );
    },
    [filterProps]
  );

  const sortProducts = useCallback(
    (products) => {
      return _.orderBy(products, filterProps.sort.value, "asc");
    },
    [filterProps]
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
  }, [filterProps, products, filterProducts, setFilteredProducts]);

  const changeHandler = (name, value) => {
    setFilterProps({ ...filterProps, [name]: value });
  };

  return (
    <>
      <div className={styles.filter_box}>
        <SearchBar
          onInputChange={(e) => changeHandler("query", e.target.value)}
          value={filterProps.query}
        />
        <SelectComponent
          value={filterProps.sort}
          options={sortOptions}
          onChange={(selectedValue) => changeHandler("sort", selectedValue)}
          label="sort by : "
        />
        <SelectComponent
          value={filterProps.size}
          options={sizeOptions}
          onChange={(selectedValue) => changeHandler("size", selectedValue)}
          label="order by :"
        />
      </div>
    </>
  );
};

export default FilterProducts;
