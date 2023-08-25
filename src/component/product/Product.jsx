import React from "react";
import "./product.css";
import { popularProducts } from "../../data";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
 

  return (
    <div className="product-containor">
      <div className="prodImage">
        <img src={item.img} alt="" className="prod-img" />
        <div className="prodIcon">
          <div className="prodcart icon">
            <ShoppingCartIcon />
          </div>
          <Link to={`/Product/${item._id}`}>
            <div className="prodcart icon">
              <SearchIcon />
            </div>
          </Link>
          <div className="prodcart icon">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
