import React  from "react";
import { Route, Switch } from "react-router";
import SubNavBar from "./SubNavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import MakePurchase from "./purchase/MakePurchase";
import PurchaseList from "./purchase/PurchaseList";



let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})


const Purchase = () => {

    const depid = localStorage.getItem('depid');
    const [purchase,setPurchase] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/purchases/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setPurchase(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])



    return(
        <>
        {
            (depid === '1' || depid === '4')?
            <>
                <SubNavBar type="purchase"/>
                <Switch>
                    <Route path="/dashboard/purchase/purchaselist" component={() =><PurchaseList data={purchase}/>}/>
                    <Route path="/dashboard/purchase/makepurchase" component={MakePurchase}/>                
                </Switch>
            </>:
            (depid === '3')?
            <>
                <SubNavBar type="purchase"/>
                <Switch>
                    <Route path="/dashboard/purchase/purchaselist" component={() =><PurchaseList data={purchase}/>}/>
                    {/* <Route path="/dashboard/purchase/makepurchase" component={MakePurchase}/>                 */}
                </Switch>
            </>:null

            
        }
            
        </>
    );
    
}

export default Purchase;