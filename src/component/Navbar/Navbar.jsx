import React from "react";
import "./navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const qty = useSelector(state=>state.cart.qty)



  return (
    <div className="nav-containor">
      <div className="left-nav">
        <span className="language">EN </span>
        <div className="search">
          <input type="text" placeholder="SEARCH" className="inputsearch" />    
          <SearchIcon />
        </div>
      </div>
      <div className="center-nav">
        <h4 className="title">.LAMA</h4>
      </div>
      <div className="right-nav">
        <span className="right-link">SIGN IN</span>
        <span className="right-link">REGISTER</span>
        <div className="shopingIcon">
          <Link to="/Cart">        <ShoppingCartIcon className="shoping"/></Link>

        <div className="badge"><span>{qty}</span></div>
        
        </div>
        
        
        </div>
    </div>
  );
};

export default Navbar;
