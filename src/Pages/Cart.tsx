import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import cartEmpty from "../assets/cartEmpty.png";
import TableComponent from "../components/TableComponent";
import NavigationBar from "../components/NavigationBar";
import { DASHBOARD, PAYMENT } from "../utils/constants";
import { CartActionType } from "../enum/CartAction";

const Cart = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  const { state, dispatch } = appContext;

  const amount: number = useMemo(() => {
    let total = 0;
    state.cartItems.map((item) => {
      total += item.price * (item.quantity || 0);
    });
    return total;
  }, [state.cartItems]);
  const emptyCart = () => {
    dispatch({ type: CartActionType.EMPTY_CART });
    navigate(`${PAYMENT}`);
  };
  return (
    <>
      <NavigationBar />
      <div className="p-8">
        <h1 className=" items-center text-3xl font-bold mb-6">Shopping Cart</h1>
        {state.cartItems.length === 0 ? (
          <>
            <div className="flex items-center justify-center">
              <img className="h-64 w-64" src={cartEmpty}></img>
            </div>
            <span className="flex mt-6 justify-center text-2xl">
              Your Cart is empty
            </span>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              name="Go For Shopping"
              onClick={() => navigate(`${DASHBOARD}`)}
            />
          </>
        ) : (
          <div>
            <Button
              onClick={() => navigate(`${DASHBOARD}`)}
              name="Go Back"
            ></Button>
            <TableComponent cartItems={state.cartItems} />
            <div className=" flex justify-between mt-6">
              <Button
                onClick={() => {
                  emptyCart();
                }}
                name="Make Payment"
              />
              <h3 className="text-xl font-semibold">Total: Rs {amount}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
