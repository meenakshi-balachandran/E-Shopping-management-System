import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ProductType } from '../type/ProductType';

const Products = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  if (!appContext) {
    throw new Error('AppContextProvider is missing');
  }
  const { products, addToCart } = appContext


  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }
  const handleAddToCart = (product: any) => {
    addToCart(product);
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="p-8">
        <h1 className="text-3xl text-center font-semibold mb-6">Products</h1>
        <div>
          <Button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' name='Back' onClick={() => navigate("/dashboard")}></Button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-center">
          {products.map((product: ProductType) => (
            <div className="border rounded-lg p-6 bg-gray-100">
              <Link to={`${product.id}`} >
                <img className='h-64 w-96 mb-2' src={product.image}></img>
                <h3 className="text-xl font-medium">{product.name}</h3>
                <p className="text-gray-700">Price: Rs {product.price}</p>
              </Link>
              <div>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" name='Add to Cart' />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
