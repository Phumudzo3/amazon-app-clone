import React from "react";
import "./Home.css";
import {Route} from 'react-router-dom'
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"     alt="backgpround-cover"/>
        <Products/>
      </div>
    
    </div>
  );
};

export default Home;
