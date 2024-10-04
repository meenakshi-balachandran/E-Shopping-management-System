import React, { useContext } from 'react'
import AuthContext, { AuthProps } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const auth= useContext(AuthContext);
  if(!auth) {
    throw new Error ("Authentication is missing")
  }
  const {isAuthenticated} = auth;

  return (
    isAuthenticated ? <Outlet/>: <Navigate to ="/login"/>
  )
}

export default PrivateRouter