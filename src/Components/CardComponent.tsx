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
    throw new Error("AppContextProvider is missing");
  }
  const { cartItems, products, addToCart, updateCartQuantity } = appContext;

  const [cartItem, setCartItem] = useState(
    cartItems.find((element) => element.id === product.id)
  );
  
  useEffect(() => {
    setCartItem(cartItems.find((element) => element.id === product.id));
  }, [cartItems, product.id]);


  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };
  return (

    <div
      className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-64 h-96"
    >
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src={product.image}
          alt="card-image"
          className="h-full w-full object-contain rounded-md"
        />
      </div>
      <div className="p-4">
      <Link to={`${product.id}`} className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">{product.name}</p>
          <p className="text-cyan-600 text-xl font-semibold">
            Rs. {product.price}
          </p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          {product.category} Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Impedit, iusto?
        </p>
        </Link>
        <div>
          {cartItem ? (
            <>
              <Button
                variant="SECONDARY"
                onClick={() =>
                  updateCartQuantity(product.id, product.quantity || 0)
                }
                name="-"
              />
              <span className="mx-2 text-black">{cartItem.quantity}</span>
              <Button
                variant="SECONDARY"
                onClick={() => addToCart(product)}
                name="+"
              />
            </>
          ) : (
            <Button
              onClick={() => handleAddToCart(product)}
              name="Add to Cart"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
