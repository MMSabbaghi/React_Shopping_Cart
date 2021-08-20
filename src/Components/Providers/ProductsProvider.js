import React, { useContext, useReducer } from "react";
import { dbProducts } from "../../Db/DbProducts";
const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

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

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, dbProducts);

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
