import React, { useState, useEffect } from "react";
import SubNavBar from "./SubNavBar";
import { Route, Switch } from "react-router";
import ListItems from "./cards/ListItems";
import axios from "axios";
import NewCart from "./newcart/NewCart";
import AddCustomers from "./sales/AddCustomers";
import Invoicelist from "./sales/Invoicelist";




let instance = axios.create({
  baseURL: 'https://ssm-erp-backend.herokuapp.com',
  headers: {
      get: {
          'Content-Type': 'application/json'
      }
  }
})

const Sales = () => {
  const depid = localStorage.getItem('depid');

  const [person,setPerson] = useState();
  const [invoicedata,setInvoicedata] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/customers/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setPerson(res.data);

            res = await instance.get('/api/invoices',
            {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }

            }
            );
            setInvoicedata(res.data);
        }
        catch (e) {
            alert("Opps Something Went Wrong")
            console.log(e);
        }
  }, [])

  return(
      <>
      {
        (depid === '1') ?
        <>
          <SubNavBar type="sales"/>
          <Switch>
              <Route path="/dashboard/sales/customerslist" component={() => <ListItems type="cust" data={person} />}/>
              <Route path="/dashboard/sales/addcustomer" component={AddCustomers}/>
              <Route path="/dashboard/sales/invoicelist" component={() => <Invoicelist data={invoicedata}/>}/>
              <Route path="/dashboard/sales/newcart" component={NewCart}/>
          </Switch>
        </>:
        (depid === '2') ?
        <>
          <SubNavBar type="sales"/>
          <Switch>
              <Route path="/dashboard/sales/customerslist" component={() => <ListItems type="cust" data={person} />}/>
              <Route path="/dashboard/sales/addcustomer" component={AddCustomers}/>
              <Route path="/dashboard/sales/invoicelist" component={() => <Invoicelist data={invoicedata}/>}/>
              <Route path="/dashboard/sales/newcart" component={NewCart}/>
          </Switch>
        </>:
        (depid === '3') ?
        <>
          <SubNavBar type="sales"/>

          <Switch>
              <Route path="/dashboard/sales/invoicelist" component={() => <Invoicelist data={invoicedata}/>}/>
          </Switch>
        </>:
        (depid === '5') ?
        <>
          <SubNavBar type="sales"/>
          <Switch>
              <Route path="/dashboard/sales/customerslist" component={() => <ListItems type="cust" data={person} />}/>
              <Route path="/dashboard/sales/invoicelist" component={() => <Invoicelist data={invoicedata}/>}/>
          </Switch>
        </>:null
      }
      </>
    );

}

export default Sales;