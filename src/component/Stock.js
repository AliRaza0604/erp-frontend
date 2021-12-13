import React, {createContext,useReducer}  from "react";
import { Route, Switch } from "react-router";
import SubNavBar from "./SubNavBar";
import ProductList from "./stock/ProductList";
import RawMaterialList from "./stock/RawMaterialList";
import axios from "axios";
import { useState, useEffect } from "react";
import { reducer } from "./cart/Reducer";

export const CartdataContext = createContext();


let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

// const initialState = {
//     data: [],
// };

const Stock = () => {

    const [raw,setRaw] = useState();
    const [product,setProduct] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/inventory/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setRaw(res.data);

            res = await instance.get('/api/products/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setProduct(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    
    
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [cartItems,setCartItems] = useState([]);

    const AddItem = (data) => {
        if (cartItems.find((d) => d.prodid === data.prodid)) {
            setCartItems(cartItems.map((x) => {
                if (x.prodid === data.prodid) {
                    return {
                        ...x,
                        quantity: x.quantity + 1
                    };
                } else {
                    return {
                        ...x,
                        quantity: 1    
                    };
                }
            }));
        } else {
            setCartItems([...cartItems, data]);
        }
        console.log(data, cartItems);


    };

    console.log(cartItems)

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

    // const addtocart = (id) => {
    //     return dispatch({
    //         type:"ADD_ITEM",
    //         payload: id,
    //     })
    // };

    return(
        <>
            <SubNavBar type="stock"/>
            <Switch>
                <Route path="/dashboard/stock/productlist" component={() =><ProductList data1={product} addtocart={AddItem} />}/>
                <Route path="/dashboard/stock/rawmateriallist" component={() => <RawMaterialList data={raw}/>}/>
            </Switch>
        </>
    );
    
}

export default Stock;