import React, { useState, useEffect } from "react";
import Chart from "./sales/Chart";
import { subDays} from "date-fns";
import SubNavBar from "./SubNavBar";
import { Route, Switch } from "react-router";
import ListItems from "./cards/ListItems";
import axios from "axios";
import NewCart from "./newcart/NewCart";
import AddCustomers from "./sales/AddCustomers";
import Invoicelist from "./sales/Invoicelist";

const data = [];
for(let num = 30; num >= 0; num--){
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
    value2: 1.25 + Math.random()
  })
}

// console.log(data.date[0])

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
  const [invoicedata,setInvoicedata] = useState();
    
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

            res = await instance.get('/api/invoices',
            {

            }
            );
            console.log(res);
            setInvoicedata(res.data);
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
            <Route path="/dashboard/sales/addcustomer" component={AddCustomers}/>
            <Route path="/dashboard/sales/invoicelist" component={() => <Invoicelist data={invoicedata}/>}/>
            <Route path="/dashboard/sales/newcart" component={NewCart}/>
        </Switch>
      </>
    );

}

export default Sales;