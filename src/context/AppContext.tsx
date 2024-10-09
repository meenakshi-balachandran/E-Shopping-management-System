import React, { createContext, ReactNode, useReducer } from "react";
import productLists from "../data/productLists";
import { ProductType } from "../type/ProductType";
import { CartAction, cartReducer } from "../reducer/CartReducer";


export interface CartItem extends ProductType {
  quantity: number;
}

export interface AppContextType {
  products: ProductType[];
  cartItems: CartItem[];
}

const initialState: AppContextType = {
  cartItems: [],
  products: productLists,
};
interface CartContextValue {
  state: AppContextType;
  dispatch: React.Dispatch<CartAction>;
}

const data: CartContextValue = {
  state: initialState,
  dispatch: () => null,
};

const AppContext = createContext(data);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
