import { useProductsActions } from "../Providers/ProductsProvider";
import Product from "../Product/Product";
import FilterProducts from "../FilterProducts/FilterProducts";
import styles from "./ProductList.module.css";
import { useState } from "react";
import { useProducts } from "../Providers/ProductsProvider";

const ProductList = () => {
  const dispatch = useProductsActions();
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const renderFilteredProducts = () => {
    return (
      <FilterProducts
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    );
  };

  if (!filteredProducts.length) {
    return (
      <>
        {renderFilteredProducts()}
        <h4> No products found! </h4>
      </>
    );
  }

  return (
    <>
      {renderFilteredProducts()}
      <div className={styles.productList}>
        {filteredProducts.map((p) => {
          return (
            <Product
              product={p}
              key={p.id}
              onIncrement={() =>
                dispatch({ type: "incrementQuantity", value: p.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrementQuantity", value: p.id })
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
