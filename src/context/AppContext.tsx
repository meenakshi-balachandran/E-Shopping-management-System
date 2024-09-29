import React, { createContext, useState, ReactNode } from 'react';
import tv from "../assets/appliances.jfif";
import books from "../assets/books.jfif";
import clothes from "../assets/clothing.jpg";
import electronics from "../assets/electronics2.jpg";


// Define the product and cart interfaces
export interface Product {
  id: number;
  name: string;
  price: string;
  image: any
  quantity?: number; // Optionally track quantity for cart items
}

interface AppContextType {
  products: Product[];
  cartItems: Product[];
  addToCart: (product: Product) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  isLoggedIn: boolean; // New property
  login: () => void;
  logout: () => void;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Sample product data
const productsData: Product[] = [
  { id: 1, name: 'TV', price: "Rs 12000", image:tv },
  { id: 2, name: 'Books', price: "Rs 200", image:books},
  { id: 3, name: 'Kurti', price: "Rs 500 ", image:clothes },
  { id: 4, name: 'Laptop', price: "Rs 50000", image:electronics},
  { id: 5, name: 'T-Shirts', price: "Rs 350", image:clothes},
  { id: 6, name: 'Books', price: "Rs 200", image:books},
  { id: 7, name: 'Kurti', price: "Rs 500 ", image:clothes },
];

// Provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // State to track items in the cart
  const [products] = useState<Product[]>(productsData); // Initial product data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems; // If the product already exists, do nothing
      }
      return [...prevItems, { ...product, quantity: 1 }]; // Add product with quantity 1
    });
  };

  // Update the quantity of a product in the cart
  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const appContextValue: AppContextType = {
    products,
    cartItems,
    addToCart,
    updateCartItemQuantity,
    isLoggedIn,
    login : () => setIsLoggedIn(true),
    logout : () => setIsLoggedIn(false)
  };


  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContext;
