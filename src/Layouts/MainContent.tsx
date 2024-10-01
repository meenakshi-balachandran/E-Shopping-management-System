import { Outlet } from "react-router-dom"
import Products from "../pages/Products"
import NavBar from "./NavBar"

function MainContent() {
  return (
    <>
    <NavBar />
    <Products />
    <Outlet />
    </>
  )
}

export default MainContent