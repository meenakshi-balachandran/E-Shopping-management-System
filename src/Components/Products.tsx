import React, { useContext, useState } from 'react';
import AppContext, { Product } from '../context/AppContext';
import mixedFruit from '../assets/mixed-fruit.jpeg'
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const appContext = useContext(AppContext)
  if (!appContext) {
    throw new Error('AppContextProvider is missing. Ensure your app is wrapped with AppContextProvider.');
  }
  const { products, addToCart, updateCartItemQuantity, isLoggedIn } = appContext

  const [selectedProduct, setSelectedProduct] = useState<{ [key: number]: boolean }>({});

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }
  const handleAddToCart = (product: any) => {
    if (!isLoggedIn) {
      alert('Please login first to add items to the cart.');
      return;
    }
    addToCart(product);
    setSelectedProduct((prev) => ({ ...prev, [product.id]: true }));
  }

  const handleQuantityChange = (product: Product, quantity: number) => {
    updateCartItemQuantity(product.id, quantity);
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <Link to = "{product.id}" className="border rounded-lg p-6 bg-gray-100">
            <img src={product.image}></img>
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-gray-700">Price: {product.price}</p>
            <div>
              {selectedProduct[product.id] ? (
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  onChange={(e) => handleQuantityChange(product, parseInt(e.target.value, 10))}
                  className="border p-2 rounded w-16"
                />
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
