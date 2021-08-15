import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/NavBar/Navbar";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import FilterProducts from "./Components/FilterProducts/FilterProducts";

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <div className="container">
        <FilterProducts />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
