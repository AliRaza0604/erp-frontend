import React from "react";

const AvailableButton = (props) => {
    return(
        <div className="mb-2 flex flex-row">
            <label className="mr-2 w-20 text-text3 text-sm" >Available</label>
            <input disabled className="h-6 w-20 text-center border-2 border-primary font-semibold text-sm text-text3 rounded-md flex items-center " value={props.available}/>
        </div>
    );

}

export default AvailableButton;