import styles from "./Product.module.css";
import { BiTrashAlt } from "react-icons/bi";

const Product = (props) => {
  const { product, productIndex, onIncrement, onDecrement, onRemove } = props;

  return (
    <div className={styles.product}>
      <span className={styles.product_number}>{productIndex} </span>
      <span> {product.title} </span>
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
  );
};

// import React from "react";

// class Product extends React.Component {
//   render() {
//     return (
//       <p>
//         <span>Product 1 : </span> <span> # {this.title} </span>
//         <p> Price : {this.price} </p>
//         {this.children}
//       </p>
//     );
//   }
// }

export default Product;
