import React, { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import cartEmpty from "../assets/cartEmpty.png";
import TableComponent from "../components/TableComponent";

const Cart: React.FC = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  if (!appContext) {
    return <div>AppContext is undefined</div>;
  }

  const { cartItems} = appContext;

  const amount: number = useMemo(() => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price * (item.quantity || 0);
    });
    return total;
  }, [cartItems]);

  return (
    <div className="p-8">
      <h1 className=" items-center text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
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
            onClick={() => navigate("/dashboard")}
          />
        </>
      ) : (
        <div>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => navigate("/dashboard")}
            name="Go Back"
          ></Button>
          <TableComponent cartItems = {cartItems}/> 
          <div className=" flex justify-between mt-6">
            <button className=" bg-blue-400 rounded-r-lg px-4 py-3 text-white">
              Make Payment
            </button>
            <h3 className="text-xl font-semibold">Total: Rs {amount}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
