import './App.css';

import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Cat from "./pages/Cat";
import Dog from "./pages/Dog";
import Fish from "./pages/Fish";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Layout><Welcome/></Layout>}></Route>
        <Route path="/cat" element={<Layout><Cat/></Layout>}></Route>
        <Route path="/dog" element={<Layout><Dog/></Layout>}></Route>
        <Route path="/fish" element={<Layout><Fish/></Layout>}></Route>

        <Route path="*" element={<Layout><PageNotFound/></Layout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
