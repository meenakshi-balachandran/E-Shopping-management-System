import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { Icons, IconType } from "../components/Icon"
import NavigationBar from "../components/NavigationBar"
import { useContext } from "react"
import AppContext from "../context/AppContext"

const Payment = () => {
  const navigate = useNavigate()
  const cartContext = useContext(AppContext);

  if (!cartContext) {
    return <div>AppContext is undefined</div>;
  }
  const {emptyCart} = cartContext

  const handlePayment = () => {
    navigate("/home")
    emptyCart()
  }
  return (
    <>
    <NavigationBar />
    <div className="bg-gray-100 h-screen">
      <div className="p-6  md:mx-auto">
        <Icons type={IconType.PaymentCheck}/>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">ORDER PLACED !!</h3>
            <p className="text-gray-600 my-2">Successfully placed your order. You can track your order after 24 hours..</p>
            <p> Thanks for shopping!!</p>
            <div className="py-10 text-center">
                <Button name="Go Home" onClick={() => handlePayment()}/>
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Payment