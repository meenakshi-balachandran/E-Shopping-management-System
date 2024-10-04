import { Link } from "react-router-dom";
import { ProductType } from "../type/ProductType";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Button from "./Button";

interface cardProps {
  product: ProductType;
}

function CardComponent({ product }: cardProps) {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('AppContextProvider is missing');
  }
  const {cartItems,products, addToCart, updateCartQuantity } = appContext;

  const [cartItem, setCartItem] = useState(
    cartItems.find((element) => element.id === product.id)
  );
  useEffect(() => {
    setCartItem(cartItems.find((element) => element.id === product.id));
  }, [cartItems,product.id]);

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }
  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    
  };

  return (
    <>
      <div className='border rounded-lg p-6 bg-gray-100'>
        <Link to={`${product.id}`}>
          <img className='h-64 w-96 mb-2' src={product.image}></img>
          <h3 className='text-xl font-medium'>{product.name}</h3>
          <p className='text-gray-700'>Price: Rs {product.price}</p>
        </Link>
        <div>
          {cartItem ? (
            <>
              <Button
                variant="SECONDARY"
                onClick={() =>
                  updateCartQuantity(product.id, product.quantity || 0)
                }
                name='-'
              />
              <span className='mx-2 text-black'>{cartItem.quantity}</span>
              <Button
                variant="SECONDARY"
                onClick={() => addToCart(product)}
                name='+'
              />
            </>
          ) : (
            <Button
              onClick={() => handleAddToCart(product)}
              name='Add to Cart'
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CardComponent;
