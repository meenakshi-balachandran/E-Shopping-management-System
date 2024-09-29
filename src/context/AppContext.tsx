import React, { createContext, ReactNode, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: String;
}

interface AppContextType {
  products: Product[]; 
}
const AppContext = createContext<AppContextType | undefined>(undefined);

const productsData: Product[] = [
  { id: 1, name: 'Carrot', price: "Rs 70/kg" },
  { id: 2, name: 'Mixed Nuts', price: "Rs 400"},
  { id: 3, name: 'Fruit Salad', price: "Rs 250" },
  { id: 4, name: 'Cokkies', price: "Rs 120" },
];

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [products] = useState<Product[]>(productsData); // Set initial products


  const appContextValue: AppContextType = {
    products,
  };

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContext;
