import React from "react";
import CardItems from "../cards/CardItem";



const ProductList = (props) => {
    return(
        <>
            <div className="p-3 grid grid-cols-4 grid-rows-3 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
                {props.data1?.map((curdata) => <CardItems type="product" key={curdata.prodid} data={curdata}/>)}
            </div>
            
        </>
    );
}

export default ProductList;