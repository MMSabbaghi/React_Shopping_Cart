import { useProducts, useProductsActions } from "../Providers/ProductsProvider";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  if (!products.length) {
    return <h4> No products found! </h4>;
  }

  return (
    <>
      <div className={styles.productList}>
        {products.map((p, index) => {
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
