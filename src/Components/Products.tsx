import React, { useContext } from 'react';
import AppContext, { Product } from '../context/AppContext';
import mixedFruit from '../assets/mixed-fruit.jpeg'
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    console.log(context);
    
    return <p>No products found</p>;
  }

  const { products } = context;

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <Link to = "{product.id}" className="border rounded-lg p-6 bg-gray-100">
            <img src={mixedFruit}></img>
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-gray-700">Price: {product.price}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
