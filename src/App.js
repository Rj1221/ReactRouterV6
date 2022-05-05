import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Blog from './MBlog/Blog';
import Order from './Orders/Order';
import Profile from './Profile/Profile';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useSelector } from 'react-redux';
function App ()
{
  // @ts-ignore
  const { isAuthenticated } = useSelector( ( state ) => state.root );
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/admin/dashboard" element={ <Dashboard /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/order" element={ <Order /> } />
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute> }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
