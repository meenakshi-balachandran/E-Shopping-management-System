import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import cartEmpty from '../assets/cartEmpty.png'

const Cart: React.FC = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  if (!appContext) {
    return <div>AppContext is undefined</div>;
  }

  const { cartItems, updateCartItemQuantity, addToCart } = appContext;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0);

  return (
    <div className="p-8">
      <h1 className=" items-center text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <>
          <div className='flex items-center justify-center'>
            <img className='h-64 w-64' src={cartEmpty}></img>
          </div>
          <span className='flex mt-6 justify-center text-2xl'>Your Cart is empty</span>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" name='Go For Shopping' onClick={() => navigate("/dashboard")} />
        </>

      ) : (
        <div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => navigate("/home")} name='Go Back'>

          </Button>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantiy
                </th>
              </tr>
            </thead>
            {cartItems.map((item) => (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={item.image} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {item.price}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <Button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={() => updateCartItemQuantity(item.id, item.quantity)} name='-' />
                    <span className="mx-2 text-gray-600">{item.quantity}</span>
                    <Button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={() => addToCart(item)} name='+' />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className=" flex justify-between mt-6">
            <button className=" bg-blue-400 rounded-r-lg px-4 py-3 text-white">Make Payment</button>
            <h3 className="text-xl font-semibold">Total: Rs{totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
