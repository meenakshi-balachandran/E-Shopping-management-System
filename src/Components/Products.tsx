import React, { FC, useContext, useState } from 'react';
import AppContext, { Product } from '../context/AppContext';

const Products = () => {
  const appContext = useContext(AppContext)
  if (!appContext) {
    throw new Error('AppContextProvider is missing. Ensure your app is wrapped with AppContextProvider.');
  }
  const { products, addToCart, updateCartItemQuantity} = appContext

  const [selectedProduct, setSelectedProduct] = useState<{ [key: number]: boolean }>({});

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setSelectedProduct((prev) => ({ ...prev, [product.id]: true }));
  }

  const handleQuantityChange = (product: Product, quantity: number) => {
    updateCartItemQuantity(product.id, quantity);
  };

  return (
    <div className="p-8 text-center ">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div className="border rounded-lg p-6 bg-gray-100">
            <img className='h-64 w-96 mb-2' src={product.image}></img>
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-gray-700">Price: Rs {product.price}</p>
            <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
            
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
