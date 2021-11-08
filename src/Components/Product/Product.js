import styles from "./Product.module.css";
import { BiTrashAlt } from "react-icons/bi";

const Product = (props) => {
  const { product, onIncrement, onDecrement } = props;

  const renderBtns = () => {
    if (!product.quantity)
      return <button onClick={onIncrement}>Add to cart</button>;
    return (
      <div>
        <button onClick={onDecrement}>
          {product.quantity > 1 ? " - " : <BiTrashAlt size="12px" />}
        </button>
        <span> « {product.quantity} » </span>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  };

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
        {renderBtns()}
      </div>
    </div>
  );
};

export default Product;
