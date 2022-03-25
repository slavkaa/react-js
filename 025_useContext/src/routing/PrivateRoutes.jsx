import React from 'react'
import {Routes, Route} from "react-router-dom";

import Welcome from "./../pages/Welcome";
import Layout from "./../pages/Layout";
import Cat from "./../pages/Cat";
import Dog from "./../pages/Dog";
import Fish from "./../pages/Fish";
import PageNotFound from "./../pages/PageNotFound";
import SignOut from "../pages/SignOut";

function PrivateRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Layout><Welcome/></Layout>} />
      <Route path="/cat" element={<Layout><Cat/></Layout>} />
      <Route path="/dog" element={<Layout><Dog/></Layout>} />
      <Route path="/fish" element={<Layout><Fish/></Layout>} />
      <Route path="/sign-out" element={<Layout><SignOut/></Layout>} />

      <Route path="*" element={<Layout><PageNotFound/></Layout>} />
    </Routes>
  );
}

export default PrivateRoutes;
