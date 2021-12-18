import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import ListItems from "./cards/ListItems";
import SubNavBar from "./SubNavBar";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

const Notifications = () => {

    const [purchase,setpurchase] = useState();
    const [production,setproduction] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/purchases/notifications',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setpurchase(res.data);

            res = await instance.get('/api/productions/notifications',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setproduction(res.data);
        }
        catch (e) {
            alert("Opps Something Went Wrong")
            console.log(e);
        }
    }, [])

    return(
        <>
            <div>
                <SubNavBar type='notification'/>
                <Switch>
                    <Route path="/dashboard/notifications/purchase" component={() => <ListItems type="notipur" data={purchase} />}/>
                    <Route path="/dashboard/notifications/production" component={() => <ListItems type="notiprod" data={production} />}/>
                </Switch>
            </div>
        </>
    );
}

export default Notifications