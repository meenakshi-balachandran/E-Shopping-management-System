import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Contact from '../Components/Contact';
import { AppContextProvider } from '../context/AppContext';
import MainContent from '../Layouts/MainContent';
import HomePage from '../Layouts/HomePage';

function Router() {
  return (
    <>
    <AppContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path = "home" Component={MainContent} />
      <Route path = "contact" Component={Contact} />
    </Routes>
    </BrowserRouter>
    </AppContextProvider>
    < Outlet />
    </>
  )
}

export default Router