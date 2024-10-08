import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import { AppContextProvider } from "../context/AppContext";
import MainContent from "../layouts/MainContent";
import HomePage from "../layouts/HomePage";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthContext";
import PrivateRouter from "./PrivateRouter";
import Payment from "../pages/Payment";
import { CART, CATEGORY, CONTACT, DASHBOARD, HOME, LOGIN, PAYMENT, PRODUCTS } from "../utils/constants";

function Router() {
  return (
    <>
      <AppContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path={`${HOME}`} Component={HomePage} />
              <Route index element={<Navigate to={"/home"} />} />
              <Route path={`${LOGIN}`} Component={Login} />
              <Route element={<PrivateRouter />}>
                <Route path={`${DASHBOARD}`} Component={MainContent} />
                <Route path="dashboard/:productId" Component={ProductDetail} />
                <Route path={`${CONTACT}`} Component={Contact} />
                <Route path={`${PRODUCTS}`} Component={Products} />
                <Route path="products/:productId" Component={ProductDetail} />
                <Route path={`${CATEGORY}`} Component={Categories} />
                <Route path={`${CART}`} Component={Cart} />
                <Route path={`${PAYMENT}`} Component={Payment} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </AppContextProvider>
    </>
  );
}

export default Router;
