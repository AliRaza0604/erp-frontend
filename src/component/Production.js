import React, {useEffect, useState} from "react";
import axios from "axios";
import { Route, Switch } from "react-router";
import SubNavBar from "./SubNavBar";
import AddProduction from "./production/AddProduction";
import UnderProgress from "./production/UnderProgress";


let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

const data = [
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
        name: "Bulb",
        description: "12v green color",
        available: "10",
    },  
    
]


const Production = () => {

    const [producion,setProduction] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/productions/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setProduction(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return(
        <>
            <SubNavBar type="production"/>
            <Switch>
                <Route path="/dashboard/production/underprogress" component={() => <UnderProgress data={producion} />}/>
                <Route path="/dashboard/production/neworder" component={AddProduction}/>
            </Switch>
        </>
    );
}

export default Production;