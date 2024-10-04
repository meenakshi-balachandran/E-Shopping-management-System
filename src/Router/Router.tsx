import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact';
import { AppContextProvider } from '../context/AppContext';
import MainContent from '../layouts/MainContent';
import HomePage from '../layouts/HomePage';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';
import PrivateRouter from '../context/PrivateRouter';

function Router() {
  return (
    <>
      <AppContextProvider>
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' Component={HomePage} />
            <Route index element={<Navigate to={'/home'} />} />
            <Route path='login' Component={Login}/>
            <Route element={<PrivateRouter />}>
            <Route path="dashboard" Component={MainContent} />
            <Route path="dashboard/:productId" Component={ProductDetail} />
            <Route path="contact" Component={Contact} />
            <Route path='products' Component={Products} />
            <Route path='products/:productId' Component={ProductDetail} />
            <Route path='categories' Component={Categories} />
            <Route path='cart' Component={Cart} />
            </Route>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </AppContextProvider>
    </>
  )
}

export default Router