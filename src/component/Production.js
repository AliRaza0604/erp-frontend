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



const Production = () => {

    const [producion,setProduction] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/productions/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
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