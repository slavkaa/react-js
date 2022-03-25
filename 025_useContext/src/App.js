import './App.css';

import React, {useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";

import NavBar from "./components/UI/NavBar/NavBar";
import MainRouter from "./routing/MainRouter";
import {AuthContext} from "./context/AuthContext";

function App() {

  const [isAuth, setIsAuth]= useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <NavBar/>
        <MainRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
