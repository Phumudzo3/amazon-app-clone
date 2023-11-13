import { useReducer } from "react";
import shoppingContext from "./ShoppingContext";
import { shoppingReducer } from "./ShoppingReducer";
import { Children } from "react";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  //selectors

  const getBasketTotal = (basket) =>basket?.reduce((amount, item) => item.price + amount, 0);
  console.log('Basket:', state.basket);
  console.log('Total:', getBasketTotal(state.basket));
    const addToBasket = async ({item}) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,  
    });
  };
  const emptyBasket = ()=>{
dispatch ({
  type: 'EMPTY_BASKET',
  
})
  }
  const removeFromBasket=(item)=>{
dispatch({type:"REMOVE_FROM_BASKET",payload:item})
  }
  const setUser=(user)=>{
    dispatch({
      type:"SET_USER",
      payload:user,
    })
  }
  return (
    <shoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        emptyBasket,
      }}
    >
      {props.children}
    </shoppingContext.Provider>
  );
};
