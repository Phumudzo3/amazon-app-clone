import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import PlaceOrder from "./components/PlaceOrder";
import NotFound from "./components/NotFound";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import { useEffect,useContext } from "react";
import shoppingContext from "./components/context/shopping/ShoppingContext";
import { auth } from "./firebase";

import Checkout from "./components/Checkout";
import Payment from "./components/Payment";


  const promise= loadStripe("pk_test_51O0gq3F71lqZQv1BhQpAUpoHSDPSniuoKM9jUAhddN20VQNyVjyXTkQivMtQdLBAxFmqm"+
  "3cWWRTyIlpvjma4C1yT00Yn9Ak0fx")
  
 const App=()=> {
    const context =useContext(shoppingContext);
  const {setUser}=context;
  useEffect(()=>{
    auth.onAuthStateChanged
    ((authUser)=>{
      console.log("User is ->",authUser);
      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      
      }
    });
  },[]);
   return(
    <>
    <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
  
            <Route path="/products" exact>
              <Products />
            </Route>
  
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/checkout" >
              <Checkout/>
            </Route>
            <Route path="/payment" >
              <Elements stripe={promise}>
             <Payment/>
              </Elements>
              
            </Route>
            <Route path="/login" >
              <Login/>
            </Route>
  
            <Route path="/order">
              <PlaceOrder />
            </Route>
            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
    </>
        
  
    );
  }


export default App;
