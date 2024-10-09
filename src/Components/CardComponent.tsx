import { Link } from "react-router-dom";
import { ProductType } from "../type/ProductType";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Button from "./Button";
import { CartActionType } from "../enum/CartAction";

interface cardProps {
  product: ProductType;
}

function CardComponent({ product }: cardProps) {
  const appContext = useContext(AppContext);

  const {state, dispatch} = appContext;

  const [cartItem, setCartItem] = useState(
    state.cartItems.find((element) => element.id === product.id)
  );
  
  useEffect(() => {
    setCartItem(state.cartItems.find((element) => element.id === product.id));
  }, [state.cartItems, product.id]);


   const updateCartQuantity = (id: number, quantity:number) => {
    dispatch({type: CartActionType.UPDATE_CART_QUANTITY, payload:{id,quantity}});
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
                onClick= {() => dispatch({type: CartActionType.ADD_TO_CART, payload:product})
              }
                name="+"
              />
            </>
          ) : (
            <Button
            onClick= {() => dispatch({type: CartActionType.ADD_TO_CART, payload:product})}
              name="Add to Cart"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
