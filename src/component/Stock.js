import React, {createContext,useReducer}  from "react";
import { Route, Switch } from "react-router";
import SubNavBar from "./SubNavBar";
import ProductList from "./stock/ProductList";
import RawMaterialList from "./stock/RawMaterialList";
import axios from "axios";
import { useState, useEffect } from "react";
import AddInventory from "./stock/AddInventory";



let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})


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



    return(
        <>
            <SubNavBar type="stock"/>
            <Switch>
                <Route path="/dashboard/stock/productlist" component={() =><ProductList data1={product}/>}/>
                <Route path="/dashboard/stock/rawmateriallist" component={() => <RawMaterialList data={raw}/>}/>
                <Route path="/dashboard/stock/addinventory" component={AddInventory}/>
            </Switch>
        </>
    );
    
}

export default Stock;