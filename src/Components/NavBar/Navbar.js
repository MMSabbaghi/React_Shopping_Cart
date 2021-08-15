import styles from "./navbar.module.css";
import { BiCartAlt } from "react-icons/bi";
import { useProducts } from "../Providers/ProductsProvider";

const Navbar = () => {
  const products = useProducts();
  const getProductsCount = () => products.filter((p) => p.quantity > 0).length;

  return (
    <nav className={styles.navbar}>
      <h2>Shoping App</h2>
      <span>
        <BiCartAlt size="25px" />
        <span className={styles.basket_count}>{getProductsCount()}</span>
      </span>
    </nav>
  );
};

export default Navbar;
