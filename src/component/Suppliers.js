import React from "react";
import { Route, Switch } from "react-router";
import ListItems from "./cards/ListItems";
import SubNavBar from "./SubNavBar";
import AddSuppliers from "./suppliers/AddSuppliers";
import axios from "axios";
import { useState, useEffect } from "react";


let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

const Suppliers = () => {

    const [person,setPerson] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/suppliers/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setPerson(res.data);
        }
        catch (e) {
            alert("Opps Something Went Wrong")
            console.log(e);
        }
    }, [])

    return(
        <div>
            <SubNavBar type='suppliers'/>
            <Switch>
                <Route path="/dashboard/suppliers/supplierlist" component={() => <ListItems type="supp" data={person}/>}/>
                <Route path="/dashboard/suppliers/addsuppliers" component={AddSuppliers}/>
            </Switch>
        </div>
    );

}

export default Suppliers;