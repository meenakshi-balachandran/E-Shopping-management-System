import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"

function NavBar() {
  return (
    <>
    <NavigationBar />
    <Outlet/>
    </>
  )
}

export default NavBar