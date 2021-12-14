import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://ssm-erp-backend.herokuapp.com',
  headers: {
      delete: {
          'Content-Type': 'application/json'
      }
  }
})


function UserListItemsData (props) {
  const {person} = props;

  const removeEmp = async () => {
      
      try {
          let res = await instance.delete(`/api/staff/${person.staffid}/`,
              {
                  // headers: {
                  //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                  // }
              }
          );
          console.log(res);
      }
      catch (e) {
          console.log(e);
      }
  }

  const removeCust = async () => {
      
    try {
        let res = await instance.delete(`/api/customers/${person.custid}/`,
            {
                // headers: {
                //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                // }
            }
        );
        console.log(res);
    }
    catch (e) {
        console.log(e);
    }
  }

  const removeSupp = async () => {
      
    try {
        let res = await instance.delete(`/api/suppliers/${person.supplierid}/`,
            {
                // headers: {
                //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                // }
            }
        );
        console.log(res);
    }
    catch (e) {
        console.log(e);
    }
}
    
    return(
      <tr key={person.staffid}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
              <FaUserCircle className="h-10 w-10 rounded-full text-primary" />
            </div>
            <div className="ml-4">
            {
              (props.type === "empl") ?
              <><div className="text-sm font-medium text-gray-900">{person.firstname} {person.lastname}</div>
              <div className="text-sm text-gray-500">{person.email}</div></>:
              (props.type === "cust") ?
              <><div className="text-sm font-medium text-gray-900">{person.contactperson}</div>
              <div className="text-sm text-gray-500">{person.phonenum}</div></>:
              (props.type === "supp") ?
              <><div className="text-sm font-medium text-gray-900">{person.contactperson}</div>
              <div className="text-sm text-gray-500">{person.phonenum}</div></>:
              null
            }
              
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        {
          (props.type === "empl") ?
          <><div className="text-sm text-gray-900">ABC Manufacturer</div></>:
          (props.type === "cust") ?
          <><div className="text-sm text-gray-900">{person.name}</div></>:
          (props.type === "supp") ?
          <><div className="text-sm text-gray-900">{person.name}</div></>:
          null
        }
        </td>
        {
          (props.type === "empl") ?
          <><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.depid}</td></>:
          (props.type === "cust") ?
          <><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.status}</td></>:
          (props.type === "supp") ?
          <><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td></>:
          null
        }
        
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.country}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" ><button className="hover:text-green-600">Edit</button></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" >
        {
          (props.type === "empl") ?
          <button className="hover:text-red-600" onClick={removeEmp}>Remove</button>:
          (props.type === "cust") ?
          <button className="hover:text-red-600" onClick={removeCust}>Remove</button>:
          (props.type === "supp") ?
          <button className="hover:text-red-600" onClick={removeSupp}>Remove</button>:
          null
        }
        </td>
      </tr>
    )
  }
  
export {UserListItemsData}