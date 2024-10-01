import React, { createContext, useState, ReactNode } from 'react';
import productLists from '../data/productLists';
import { ProductType } from '../type/ProductType';



export interface CartItem extends ProductType {
  quantity: number;
}

interface AppContextType {
  products: ProductType[];
  cartItems: CartItem[];
  addToCart: (product: ProductType) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<ProductType[]>(productLists);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItemQuantity = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));


  };


  const appContextValue: AppContextType = {
    products,
    cartItems,
    addToCart,
    updateCartItemQuantity,
  };


  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContext;
