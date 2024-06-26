import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/UserContext";
import MyBlogs from "./pages/MyBlogs";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/write" element={<CreatePost />}></Route>
          <Route exact path="/edit/:id" element={<EditPost />}></Route>
          <Route exact path="/posts/post/:id" element={<PostDetails />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
          <Route exact path="/myblogs/:id" element={<MyBlogs />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;
