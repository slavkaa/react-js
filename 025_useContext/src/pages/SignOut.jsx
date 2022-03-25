import React, {useContext, useEffect} from 'react'
import {AuthContext} from "../context/AuthContext";

import {Navigate} from "react-router-dom";

const SignOut = () => {

  const {setIsAuth} = useContext(AuthContext)

  useEffect(() => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }, [])

  return (
    <Navigate to="/" replace />
  )

}

export default SignOut