import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Header_2 from "./Header_2";
import { Login } from "@mui/icons-material";
import shoppingContext from "../context/shopping/ShoppingContext";
import {auth} from "../../firebase";

const Header = () => {
  const context =useContext(shoppingContext);
const {basket,user}=context;
 const handlerAuthentication=()=>{
if(user){
auth.signOut();

}
 };
  return (
    <div>
      <div className="header">
        <div className="header_logoSection">
          <Link to="/">
            <img
              className="header_logo"
              src="/asset/Amazon-Logo-Black.jpg"
              alt="logo"
            />
          </Link>
          <Link to="/"></Link>

          <div className="header_option">
            <span className="header_optionOne">Deliver to</span>
            <span className="header_optionTwo">
              <AddLocationIcon />
              South Africa
            </span>
          </div>
        </div>

        <div className="header_search">
          <input className="header_input" type="text" placeholder="search" />
          <SearchIcon className="searchicon" />
        </div>

        <div className="header_nav">
         
            <Link to={!user && "/login"}>
              <div className="header_option" onClick={handlerAuthentication}>
                <span className="header_optionOne">Hello {!user? "Guest" :user.email}</span>
                <span className="header_optionTwo">{user? 'Sign out':'Sign In'}</span>
              </div>
            </Link>
          
          <div className="header_option">
            <span className="header_optionOne">Return</span>
            <span className="header_optionTwo">$Orders</span>
          </div>

<Link to="/checkout">
<div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo  header_basketCount">{basket?.length}</span>
          </div>
</Link>
          
        </div>
        <div className="nav_2"></div>
      </div>
      <Header_2 />
    </div>
  );
};

export default Header;
