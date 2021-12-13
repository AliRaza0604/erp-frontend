import React, {useContext} from "react";
import ProductCardItem from "../cards/ProductCardItem";
import  {CartdataContext}  from "../Stock";



const ProductList = (props) => {
    return(
        <>
            <div className="p-3 grid grid-cols-4 grid-rows-3 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
                {props.data1?.map((curdata) => <ProductCardItem  key={curdata.prodid} data={curdata} addtocart={props.addtocart}/>)}
            </div>
            
        </>
    );
}

export default ProductList;