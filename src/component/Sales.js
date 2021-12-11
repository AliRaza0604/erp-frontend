import React from "react";
import Chart from "./sales/Chart";
import { subDays} from "date-fns";
import SubNavBar from "./SubNavBar";
import NewInvoice from "./sales/NewInvoice";
import { Route, Switch } from "react-router";
import Cart from "./cart/Cart"
import ListItems from "./cards/ListItems";
import axios from "axios";
import { useState, useEffect } from "react";

const data = [];
for(let num = 30; num >= 0; num--){
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
    value2: 1.25 + Math.random()
  })
}

let instance = axios.create({
  baseURL: 'https://ssm-erp-backend.herokuapp.com',
  headers: {
      get: {
          'Content-Type': 'application/json'
      }
  }
})

const Sales = () => {

  const [person,setPerson] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/customers/',
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
      <>
        <SubNavBar type="sales"/>
        {/* <Chart data={data}/> */}
        <Switch>
            <Route path="/dashboard/sales/customerslist" component={() => <ListItems type="cust" data={person} />}/>
            <Route path="/dashboard/sales/newinvoice" component={NewInvoice}/>
            <Route path="/dashboard/sales/cart" component={Cart}/>
        </Switch>
      </>
    );

}

export default Sales;