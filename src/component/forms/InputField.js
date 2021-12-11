import React, {useState} from "react";

const InputField = (props) =>{
    
    return(
        <>
        <label htmlFor={props.htmlFor} className="block text-sm font-medium text-text2" >{props.label}</label>
        <input type={props.type}
        placeholder={props.placeholder}
        min={props.min}
        name={props.name}
        id={props.id}
        autoComplete={props.autoComplete}
        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/> 
        </>
    );
}

export default InputField;