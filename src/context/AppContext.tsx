import React, { createContext, useState, ReactNode } from 'react';
import shortKurti from "../assets/short-kurti.jpg";
import umbrella from "../assets/umbrella.jpg";
import jeggins from "../assets/jeggins.jfif";
import tshirt from "../assets/tshirt.jfif";


export interface Product {
  id: number;
  name: string;
  price: number;
  image: any
  quantity ?: number;
}


export interface CartItem extends Product {
  quantity: number;
} 

interface AppContextType {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);




export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productsData] =  useState<Product[]> ( [
    { id: 1, name: 'Short Kurti', price: 250, image:shortKurti },
    { id: 2, name: 'Umbrella tops', price: 400, image:umbrella},
    { id: 3, name: 'Jeggins', price: 710, image:jeggins },
    { id: 4, name: 'Leggins', price: 300, image:jeggins},
    { id: 5, name: 'T-Shirt', price: 350, image:tshirt},
    { id: 6, name: 'Ethnic wear', price: 1000, image:umbrella},
    { id: 7, name: 'Silk Saree', price: 850 , image:shortKurti },
  ]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>(productsData);

  const addToCart = (product: Product) => {
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

  const updateCartItemQuantity = (id: number, quantity: number) => {
    quantity = quantity - 1;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
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
