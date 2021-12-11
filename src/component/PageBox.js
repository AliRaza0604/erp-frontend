import React from "react";
import logo from "../svg/ERP.svg"

const PageBox = () =>{
    return (
        <div className=" w-full h-28 border-b-2 border-secondary mb-8">
            <img
                className="mx-auto h-full w-auto"
                src={logo}
                alt="ERP"
            />
        </div>
    );
}

export default PageBox