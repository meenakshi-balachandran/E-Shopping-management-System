import { useCallback, useContext } from 'react';
import AppContext, { CartItem } from '../context/AppContext';
import Button from './Button';
import { ProductType } from '../type/ProductType';

interface items {
  cartItems: CartItem[];
}

function TableComponent({ cartItems }: items) {
  const cartContext = useContext(AppContext);

  if (!cartContext) {
    return <div>AppContext is undefined</div>;
  }
  const cart = useCallback(
    (product: ProductType) => {
      cartContext.addToCart(product);
    },
    [cartContext.cartItems]
  );

  const { updateCartQuantity } = cartContext;

  return (
    <>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-16 py-3'>
              <span className='sr-only'>Image</span>
            </th>
            <th scope='col' className='px-6 py-3'>
              Product Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Product Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Quantiy
            </th>
          </tr>
        </thead>
        {cartItems.map((item) => (
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='p-4'>
                <img
                  src={item.image}
                  className='w-16 md:w-32 max-w-full max-h-full'
                  alt='Apple Watch'
                />
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                {item.name}
              </td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>{item.price}</div>
              </td>
              <td className='px-6 py-4'>
                <Button 
                  variant='SECONDARY'
                  onClick={() => updateCartQuantity(item.id, item.quantity)}
                  name='-'
                />
                <span className='mx-2 text-gray-600'>{item.quantity}</span>
                <Button
                  variant='SECONDARY'
                  onClick={() => cart(item)}
                  name='+'
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default TableComponent;
