import React from "react";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import PageNotFound from "../controller/PageNotFound";
import PostsList from "../controller/PostsList";
import PostData from "../controller/PostData";

const MainRouter = function() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />}></Route>
        <Route path="/posts" element={<PostsList/>}></Route>
        <Route path="/post/:id" element={<PostData/>}></Route>

        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default MainRouter;
