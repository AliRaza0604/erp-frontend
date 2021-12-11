import React, { createContext, useReducer } from "react";
import ContextCart from "./ContextCart";
import { reducer } from "./Reducer";


const product = [
    {
        id: 1,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 2,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 3,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 4,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 5,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 6,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 7,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 8,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },
    {
        id: 9,
        price: "120",
        name: "Bulb1",
        description: "12v green color",
        available: "10",
    },  
    
]

export const CartContext = createContext();

const initialState = {
    data: product,
    totalAmount: 0,
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id,
        })
    };

    return(
        <CartContext.Provider value={{...state, removeItem}}>
            <ContextCart/>
        </CartContext.Provider>    
    );
}

export default Cart;