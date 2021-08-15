import React, { useContext, useReducer } from "react";
import { dbProducts } from "../../Db/DbProducts";
import _ from "lodash";
const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

const initialState = dbProducts;

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementQuantity": {
      let index = state.findIndex((p) => p.id === action.value);
      let product = { ...state[index] };
      let newState = [...state];
      product.quantity++;
      newState[index] = product;
      return newState;
    }

    case "decrementQuantity": {
      let index = state.findIndex((p) => p.id === action.value);
      let product = { ...state[index] };
      let newState = [...state];

      if (product.quantity > 1) {
        product.quantity--;
        newState[index] = product;
      } else {
        newState = state.filter((p) => p.id !== action.value);
      }
      return newState;
    }

    case "removeProduct": {
      return state.filter((p) => p.id !== action.value);
    }

    case "filterBySize": {
      if (action.value === "") {
        return initialState;
      }
      return initialState.filter(
        (p) => p.availableSizes.indexOf(action.value) >= 0
      );
    }

    case "searchProducts": {
      return state.filter(
        (p) => p.title.toLowerCase().indexOf(action.value.toLowerCase()) >= 0
      );
    }

    case "sortProducts": {
      return _.orderBy(state, action.value, "asc");
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <productsContext.Provider value={products}>
      <productsContextDispatcher.Provider value={dispatch}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export default ProductsProvider;
export const useProducts = () => useContext(productsContext);
export const useProductsActions = () => useContext(productsContextDispatcher);
