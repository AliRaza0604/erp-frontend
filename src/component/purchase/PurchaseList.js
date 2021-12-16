import React from "react";
import CardItems from "../cards/CardItem";



const PurchaseList = (props) => {
    return(
        <>
            <div className="p-3 grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
                {props.data?.map((curdata) => <CardItems type="purch" key={curdata.purchid} data={curdata}/>)}
            </div>
            
        </>
    );
}

export default PurchaseList;