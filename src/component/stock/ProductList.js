import React from "react";
import CardItems from "../cards/CardItem";


const ProductList = (props) => {
    return(
        <>
            <div className="p-3 grid grid-cols-4 grid-rows-3 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
                {props.data?.map((data) => (
                      <CardItems type="product" key={data.id} data={data}/>
                    ))}
                
                
            </div>
            
        </>
    );
}

export default ProductList;