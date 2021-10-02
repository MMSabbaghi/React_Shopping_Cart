import styles from "./navbar.module.css";
import { BiCartAlt } from "react-icons/bi";
import { useProducts } from "../Providers/ProductsProvider";

const Navbar = () => {
  const products = useProducts();
  const getProductsCount = () =>
    products.map((p) => p.quantity).reduce((t, q) => t + q);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbar_row}`}>
        <h2>Shoping App</h2>
        <span>
          <BiCartAlt size="25px" />
          <span className={styles.basket_count}>{getProductsCount()}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
