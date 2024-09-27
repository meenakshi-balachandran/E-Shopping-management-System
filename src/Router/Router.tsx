import { BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import NavBar from '../Layouts/NavBar';
import MainContent from '../Layouts/MainContent';
import Contact from '../Components/Contact';
import Login from '../Pages/Login';

function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='login' Component={Login}/>
      <Route index element={<Navigate to="login"/>} />
      <Route path = "/home" Component={NavBar} >
      <Route path = "/home" Component={MainContent} />
      <Route path = "contact" Component={Contact} />
      </Route>
    </Routes>
    </BrowserRouter>
    < Outlet />
    </>
  )
}

export default Router