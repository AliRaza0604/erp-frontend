import React from "react";
import ListItems from "../cards/ListItems";


const person = [
    {
        name:"Administration",
        departID:"1"
    },
    {
        name:"Sales",
        departID:"2"
    },
    {
        name:"Finance",
        departID:"3"
    },
    {
        name:"Purchasing",
        departID:"4"
    },
    {
        name:"Collection",
        departID:"5"
    },
    {
        name:"Production",
        departID:"6"
    }
]

const DepartList = () => {
    return(
        <>
            <ListItems type="depart" data={person}/>
        </>
    );
}

export default DepartList;