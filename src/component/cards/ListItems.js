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
                      <><UserListItemsColumn name = "Name" organization="Organization" role="Dept ID" country="Country" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      (props.type === "cust") ?
                      <><UserListItemsColumn name = "Name" organization="Organization" role="Status" country="Country" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      (props.type === "supp") ?
                      <><UserListItemsColumn name = "Name" organization="Organization" role="Status" country="Country" edit="Edit" remove="Remove"></UserListItemsColumn></>:
                      null
                    }
                  </tr>
                </thead>
                {
                  // (props.type === "user")?
                  <>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data?.map((person) => (
                      <UserListItemsData key={person.id} person={person} type={props.type}/>
                    ))}
                  </tbody>
                  </>
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ListItems;
  
