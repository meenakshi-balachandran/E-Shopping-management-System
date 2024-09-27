import { Link, Outlet } from 'react-router-dom'

function NavigationBar() {
  return (
    <>
  <div className=' '>
        <nav className='bg-gray-700'>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="items-center">
          <ul className=' flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <Link className = "link" to="/home"> E-SHOPPING MART </Link>
              <Link className = "link" to="/products"> PRODUCTS </Link>
              <Link className = "link" to="/cart"> CART </Link>
              <Link className = "link" to="/contact"> CONTACT </Link>
              </ul>

              </div>
              </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default NavigationBar