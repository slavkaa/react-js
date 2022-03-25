import React, {useContext, useEffect} from 'react'
import {AuthContext} from "../context/AuthContext";

import {Navigate} from "react-router-dom";

const SignIn = () => {

  const {setIsAuth} = useContext(AuthContext)

  useEffect(() => {
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
  }, [])

  return (
    <Navigate to="/" replace />
  )

}

export default SignIn