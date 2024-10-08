import React, { createContext, useState, ReactNode } from "react";
import productLists from "../data/productLists";
import { ProductType } from "../type/ProductType";

export interface Category {
  category: string;
}
export interface CartItem extends ProductType {
  quantity: number;
}

interface AppContextType {
  categories: Category[];
  products: ProductType[];
  cartItems: CartItem[];
  addToCart: (product: ProductType) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => number;
  emptyCart : () => void
}

const AppContetValue = {
  categories : {category : "" },
  products : {id:0,name:"",image:"",price:0,quantity: 0},
  cartItems : {},
  addToCart : () => {},
  updateCartQuantity : () => {},
  emptyCart : () => {}
}
const AppContext = createContext<AppContextType |undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const categorieList: Category[] = [
    { category: "Kurtis" },
    { category: "Leggins" },
    { category: "Anarkalis" },
    { category: "Weatern Tops" },
    { category: "Coset" },
  ];
  const [categories] = useState<Category[]>(categorieList);
  const [products] = useState<ProductType[]>(productLists);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === id && item.quantity >= 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.id !== id || item.quantity >= 1)
    );
  };
  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    return quantity;
  };

  const emptyCart = () => setCartItems([]);

  const appContextValue: AppContextType = {
    categories,
    products,
    cartItems,
    addToCart,
    updateCartQuantity,
    updateCartItemQuantity,
    emptyCart
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
