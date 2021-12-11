import React from "react";
import { Route, Switch } from "react-router";
import SubNavBar from "./SubNavBar";
import ProductList from "./stock/ProductList";
import RawMaterialList from "./stock/RawMaterialList";
import axios from "axios";
import { useState, useEffect } from "react";



const dataproduct = [
    {
        id: 1,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 2,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 3,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 4,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 5,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 6,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 7,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 8,
        price: "120",
        name: "Bulb",
        description: "12v green color",
        quantity: "10",
    },
    {
        id: 9,
        price: "120",
        name: "Bulb1",
        description: "12v green color",
        quantity: "10",
    },  
    
]

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
            setProduct(dataproduct);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return(
        <>
            <SubNavBar type="stock"/>
            <Switch>
                <Route path="/dashboard/stock/productlist" component={() => <ProductList data={product}/>}/>
                <Route path="/dashboard/stock/rawmateriallist" component={() => <RawMaterialList data={raw}/>}/>
            </Switch>
        </>
    );
    
}

export default Stock;