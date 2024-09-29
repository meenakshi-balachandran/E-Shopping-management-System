import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import NavBar from '../Layouts/NavBar';
import Contact from '../Components/Contact';
import { AppContextProvider } from '../context/AppContext';
import MainContent from '../Layouts/MainContent';

function Router() {
  return (
    <>
    <AppContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={NavBar}/>
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