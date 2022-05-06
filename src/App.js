import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Blog from "./MBlog/Blog";
import Order from "./Orders/Order";
import Profile from "./Profile/Profile";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
function App ()
{
  // @ts-ignore
  const { isAuthenticated } = useSelector( ( state ) => state.root );
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={ <Login /> } />
          {/* Using Outlet */ }
          <Route element={ <ProtectedRoute isAuthenticated={ isAuthenticated } children={ undefined } adminRoute={ undefined } isAdmin={ undefined } /> }>
            <Route path="/" element={ <Home /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/order" element={ <Order /> } />
            <Route path="/blog" element={ <Blog /> } />
          </Route>
          {/* Role By Protectected Route */ }
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={ isAuthenticated }
                adminRoute={ true }
                isAdmin={ false } //user.role === "admin" ? true : false
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Using Simple Protected Route */ }
          {/* <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
