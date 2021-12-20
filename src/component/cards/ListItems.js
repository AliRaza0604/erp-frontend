import {UserListItemsColumn}  from "./ListItemsColumn";
import {UserListItemsData} from "./ListItemsData";
import React from "react";

const ListItems = (props) => {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto ">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="shadow overflow-hidden border-b border-gray-200 ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {
                      (props.type === "empl") ?
                      <><UserListItemsColumn name = "Name" organization="Staff ID" role="Dept ID" country="Country" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      (props.type === "cust") ?
                      <><UserListItemsColumn name = "Name" organization="Organization" role="Status" country="Customer ID" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      (props.type === "supp") ?
                      <><UserListItemsColumn name = "Name" organization="Organization" role="Status" country="Supplier ID" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      (props.type === "notipur") ?
                      <><UserListItemsColumn type="noti" name = "Creation Date" organization="Quantity Required" role="Item Id" country="Status"></UserListItemsColumn></>:
                      (props.type === "notiprod") ?
                      <><UserListItemsColumn type="noti" name = "Creation Date" organization="Quantity Required" role="Item Id" country="Status"></UserListItemsColumn></>:
                      (props.type === "depart") ?
                      <><UserListItemsColumn type="depart" name = "Department Name" organization="" role="Department ID" country="Status" ></UserListItemsColumn></>:
                      null
                    }
                  </tr>
                </thead>
                {
                  (props.type === "empl")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.staffid} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "cust")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.custid} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "supp")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.supplierid} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "notipur")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.notificationid} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "notiprod")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.notificationid} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:
                  (props.type === "depart")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.departID} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>:null
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ListItems;
  
