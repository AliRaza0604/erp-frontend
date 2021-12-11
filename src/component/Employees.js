import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import ListItems from "./cards/ListItems";
import SubNavBar from "./SubNavBar";
import AddEmployee from "./employees/AddEmployee";
import UpdateEmployee from "./employees/UpdateEmployee";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

const Employees = () =>{
    const [person,setPerson] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/staff/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setPerson(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])
    return(
        <div>
            <SubNavBar type='employees'/>
            <Switch>
                <Route path="/dashboard/employees/employeeslist" component={() => <ListItems type="empl" data={person} />}/>
                <Route path="/dashboard/employees/addemployee" component={AddEmployee}/>
                <Route path="/dashboard/employees/updateemployee" component={UpdateEmployee}/>
            </Switch>
        </div>
    );
}

export default Employees;