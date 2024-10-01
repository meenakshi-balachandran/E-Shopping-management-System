import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact';
import { AppContextProvider } from '../context/AppContext';
import MainContent from '../layouts/MainContent';
import HomePage from '../layouts/HomePage';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import ProductDetail from '../pages/ProductDetail';

function Router() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' Component={HomePage} />
            <Route index element={<Navigate to={'/home'} />} />
            <Route path="dashboard" Component={MainContent} />
            <Route path="contact" Component={Contact} />
            <Route path='products' Component={Products} />
            <Route path='products/:productId' Component={ProductDetail} />
            <Route path='categories' Component={Categories} />
            <Route path='cart' Component={Cart} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
}

export default Router