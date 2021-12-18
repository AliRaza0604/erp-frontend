import React from "react";
import { FaUserCircle, FaExclamation } from "react-icons/fa";
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
                  headers: {
                      "Authorization": `Bearer ${localStorage.getItem('token')}`
                  }
              }
          );
      }
      catch (e) {
          console.log(e);
          alert("Opps Something Went Wrong")
      }
  }

  const removeCust = async () => {
      
    try {
        let res = await instance.delete(`/api/customers/${person.custid}/`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
    }
    catch (e) {
        console.log(e);
        alert("Opps Something Went Wrong")
    }
  }

  const removeSupp = async () => {
      
    try {
        let res = await instance.delete(`/api/suppliers/${person.supplierid}/`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
    }
    catch (e) {
        console.log(e);
        alert("Opps Something Went Wrong")
    }
}
    
    return(
      <tr key={person.staffid}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {
                (props.type === "notipur" || props.type === "notiprod") ?
                <>
                  <FaExclamation className="h-10 w-10 rounded-full text-primary" />
                </>:
                <>
                  <FaUserCircle className="h-10 w-10 rounded-full text-primary" />
                </>
              }
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
              (props.type === "notipur" || props.type === "notiprod") ?
              <><div className="text-sm font-medium text-gray-900">{person.creationdate}</div></>:
              null
            }
              
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        {
          (props.type === "empl") ?
          <><div className="text-sm text-gray-900">{person.staffid}</div></>:
          (props.type === "cust") ?
          <><div className="text-sm text-gray-900">{person.name}</div></>:
          (props.type === "supp") ?
          <><div className="text-sm text-gray-900">{person.name}</div></>:
          (props.type === "notipur" || props.type === "notiprod") ?
          <><div className="text-sm text-gray-900">{person.quantityreqd}</div></>:
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
          (props.type === "notipur") ?
          <><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.itemid}</td></>:
          (props.type === "notiprod") ?
          <><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.prodid}</td></>:
          null
        }

        {
          (props.type === "notipur" || props.type === "notiprod") ?
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Current month</td>
          </>:
          <>
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
          </>
        }
      </tr>
    )
  }
  
export {UserListItemsData}