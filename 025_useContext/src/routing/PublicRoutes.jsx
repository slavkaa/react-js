import React from 'react'
import {Routes, Route} from "react-router-dom";

import Welcome from "./../pages/Welcome";
import Layout from "./../pages/Layout";
import PageNotFound from "./../pages/PageNotFound";
import SignIn from "../pages/SignIn";

function PublicRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Layout><Welcome/></Layout>} />
      <Route path="/sign-in" element={<Layout><SignIn/></Layout>} />

      <Route path="*" element={<Layout><PageNotFound/></Layout>} />
    </Routes>
  );
}

export default PublicRoutes;
