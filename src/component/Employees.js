import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import ListItems from "./cards/ListItems";
import SubNavBar from "./SubNavBar";
import AddEmployee from "./employees/AddEmployee";
import UpdateEmployee from "./employees/UpdateEmployee";
import axios from "axios";
import DepartList from "./employees/DepartList";

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
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setPerson(res.data);
        }
        catch (e) {
            alert("Opps Someting Went Wrong")
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
                <Route path="/dashboard/employees/departmentlist" component={DepartList}/>
            </Switch>
        </div>
    );
}

export default Employees;