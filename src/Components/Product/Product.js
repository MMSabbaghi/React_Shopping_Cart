import styles from "./Product.module.css";
import { BiTrashAlt } from "react-icons/bi";

const Product = (props) => {
  const { product, onIncrement, onDecrement, onRemove } = props;

  return (
    <div className={styles.product}>
      <img
        alt={product.title}
        src={product.img}
        className={styles.product_image}
      />
      <span className={styles.product_title}> {product.title} </span>
      <div className={styles.bottom}>
        <p> {product.price + "$"} </p>
        <div>
          <span> « {product.quantity} » </span>
          <button onClick={onDecrement}>
            {product.quantity > 1 ? " - " : <BiTrashAlt size="12px" />}
          </button>
          {product.quantity > 1 && (
            <button onClick={onRemove}>
              <BiTrashAlt size="12px" />
            </button>
          )}
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
