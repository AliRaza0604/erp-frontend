import React from "react";

const CheckOut = () => {

    
    return(
        <>
            <div className="col-span-6 sm:col-span-4">
                <label htmlFor="product-name" className="block text-sm font-medium text-text2" >Product Name</label>
                <input type="text"
                    name="productname"
                    id="productname"
                    required
                    value={productRegisteration.productname}
                    onChange={handleInput}
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
                <label htmlFor="startdate" className="block text-sm font-medium text-text2" >Start Date</label>
                <input type="date"
                    name="startdate"
                    id="startdate"
                    max={productRegisteration.enddate}
                    required
                    format="YYYY-MM-DD"
                    value={productRegisteration.startdate}
                    onChange={handleInput}
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
            </div>
            <div className="col-span-6 sm:col-span-4">
                <label htmlFor="enddate" className="block text-sm font-medium text-text2" >End Date</label>
                <input type="date"
                    name="enddate"
                    id="enddate"
                    min={productRegisteration.startdate}
                    required
                    format="YYYY-MM-DD"
                    value={productRegisteration.enddate}
                    onChange={handleInput}
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                <input type="number"
                    name="quantity"
                    id="quantity"
                    required
                    min= '0'
                    value={productRegisteration.quantity}
                    onChange={handleInput}
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                <input type="number"
                    name="quantity"
                    id="quantity"
                    required
                    min= '0'
                    value={productRegisteration.quantity}
                    onChange={handleInput}
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
            </div>
        </>
    );
}

export default CheckOut;