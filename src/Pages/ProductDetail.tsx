import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import AppContext from "../context/AppContext";
import Button from "../components/Button";
import NavBar from "../components/NavigationBar";

function ProductDetail() {
  const appContext = useContext(AppContext)
  if (!appContext) {
    throw new Error('AppContextProvider is missing');
  }
  const { products, addToCart } = appContext
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProduct = products.find(product => productId === String(product.id))
  if(!getProduct) {
    throw new Error("product does not exist")
  }

  return (
    <>
      <NavBar />
      <Button onClick={() => navigate("/products")} name="Back" className="mt-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" />
      <div className="flex items-start mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex-shrink px-4">
          <div className=" rounded-lg dark:bg-gray-700 mb-4">
            <img className="h-64 w-64 object-contain" src={getProduct.image} alt="Product Image" />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{getProduct.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
              <span className="text-gray-600 dark:text-gray-300">{getProduct.price}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
              <span className="text-gray-600 dark:text-gray-300">In Stock</span>
            </div>
          </div>
          <div className="flex -mx-2 mb-4">
            <div className="w-1/2 px-2">
              <Button className="w-1/2 mt-20 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={() => addToCart(getProduct)} name="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail