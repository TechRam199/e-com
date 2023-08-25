import "./App.css";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Products from "../src/component/Products/Products";
import Home from "../src/pages/Home";
import Cart from "./pages/Cart/Cart";
import { Link, Navigate, Outlet, Route, Router, Routes, Switch, Redirect, useNavigate} from "react-router-dom";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { Component, useEffect } from "react";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
const isuser =  true

const navigate = useNavigate();

// Use useEffect for redirection
useEffect(() => {
  // Redirect to the login page if the user is not authenticated
  if (user) {
    navigate('/');
  }
  else{
    navigate('/login');
  } 
  
}, [user]);



  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<Cart/>}/> 
    <Route path='/Products/:category' element={<ProductList/>}/>
    <Route path='/Product/:id' element={<Product/>}/>
   
  <Route path="/login" element={<Login/>}/> 
  </Routes>
  
   </>
  );
};

export default App;
