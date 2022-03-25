import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function MainRouter({setIsAuth}) {

  const {isAuth} = useContext(AuthContext)

  if (isAuth) {
    return (<PrivateRoutes  />)
  } else {
    return (<PublicRoutes />)
  }
}

export default MainRouter;
