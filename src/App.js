import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/NavBar/Navbar";
import ProductsProvider from "./Components/Providers/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <div className="container">
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
