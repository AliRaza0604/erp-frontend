import React from "react";

function ListItemsColumn (props) {
    return(
      
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {props.title}
        </th>
      
      
    );
}

function UserListItemsColumn (props){
    return(
        <>
        {
            (props.type === 'noti') ?
            <>
                <ListItemsColumn title = {props.name}/>
                <ListItemsColumn title = {props.organization}/>
                <ListItemsColumn title = {props.role}/>
                <ListItemsColumn title = {props.country}/>
            </>:
            (props.type === 'depart') ?
            <>
                <ListItemsColumn title = {props.name}/>
                <ListItemsColumn title = {props.organization}/>
                <ListItemsColumn title = {props.role}/>
                <ListItemsColumn title = {props.country}/>
            </>:
            <>
                <ListItemsColumn title = {props.name}/>
                <ListItemsColumn title = {props.organization}/>
                <ListItemsColumn title = {props.role}/>
                <ListItemsColumn title = {props.country}/>
                {/* <ListItemsColumn title = {props.edit}/> */}
                <ListItemsColumn title = {props.remove}/>
            </>
        }
        </>
    );
}

export {UserListItemsColumn};