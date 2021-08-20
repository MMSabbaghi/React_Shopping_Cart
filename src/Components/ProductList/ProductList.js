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

  const renderFilterProducts = () => {
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
        {renderFilterProducts()}
        <h4> No products found! </h4>
      </>
    );
  }

  return (
    <>
      {renderFilterProducts()}
      <div className={styles.productList}>
        {filteredProducts.map((p, index) => {
          return (
            <Product
              productIndex={index + 1}
              product={p}
              key={p.id}
              onIncrement={() =>
                dispatch({ type: "incrementQuantity", value: p.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrementQuantity", value: p.id })
              }
              onRemove={() => dispatch({ type: "removeProduct", value: p.id })}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
