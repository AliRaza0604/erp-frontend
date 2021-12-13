import React from "react";
import NavBar from "./NavBar";
import {Switch,Route} from "react-router-dom";
import Employees from "./Employees";
import Sales from "./Sales";
import Suppliers from "./Suppliers";
import Stock from "./Stock";
import Production from "./Production";
import Home from "./Home";
import Profile from "./Profile";


const Landing = () => {
    return(
            <div className="flex flex-row w-screen h-screen overflow-hidden">
                <NavBar/>
                <div className="w-full h-full overflow-y-scroll overflow-x-hidden bg-gray-200 ">
                <Switch>
                    <Route path="/dashboard/home" component={Home}/>
                    <Route path="/dashboard/profile" component={Profile}/>
                    <Route path="/dashboard/employees" component={Employees}/>
                    <Route path="/dashboard/stock" component={Stock}/>
                    <Route path="/dashboard/sales" component={Sales}/>
                    <Route path="/dashboard/production" component={Production}/>
                    <Route path="/dashboard/suppliers" component={Suppliers}/>
                </Switch>
                </div>
            </div>
    );
}

export default Landing;