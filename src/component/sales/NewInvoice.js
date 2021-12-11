import React from "react";
import { useState } from "react";

const NewInvoice = () => {
    const [usertype, setproducttype] = useState(null);
    const handleusertype = obj => {
        setproducttype(obj.value);

        setproductRegisteration({...productRegisteration, role : obj.value})
    }
    const [productRegisteration, setproductRegisteration] = useState({
        invoicenumber: "",
        quantity: "",
        duedate: "",
        startdate: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setproductRegisteration({...productRegisteration, [name] : value})
    }

    const handleSubmit = (e) => {
        //send to backend from here
        e.preventDefault();
        
        const newuser = {...productRegisteration}
        console.log(newuser)

        setproductRegisteration({
        invoicenumber: "",
        quantity: "",
        duedate: "",
        startdate: "",});
    }
    return(
        <>
            <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add New Invoice</h3>
                    <p className="mt-1 text-sm pl-2 text-text3">
                    This invoice will be generated so be careful what you enter.
                    </p>
                </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="" onSubmit={handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="invoice-number" className="block text-sm font-medium text-text2" >Invoice Number</label>
                            <input type="number"
                            min="0"
                            name="invoicenumber"
                            id="invoicenumber"
                            required
                            value={productRegisteration.invoicenumber}
                            onChange={handleInput}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="duedate" className="block text-sm font-medium text-text2" >Due Date</label>
                            <input type="date"
                            name="duedate"
                            id="duedate"
                            max={productRegisteration.startdate}
                            required
                            format="YYYY-MM-DD"
                            value={productRegisteration.duedate}
                            onChange={handleInput}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="startdate" className="block text-sm font-medium text-text2" >Start Date</label>
                            <input type="date"
                            name="startdate"
                            id="startdate"
                            min={productRegisteration.duedate}
                            required
                            format="YYYY-MM-DD"
                            value={productRegisteration.startdate}
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

                        {/* <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                            <input type="number"
                            name="quantity"
                            id="quantity"
                            required
                            min= '0'
                            value={productRegisteration.quantity}
                            onChange={handleInput}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                        </div> */}
                    </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text1 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Save
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </>
    );
}

export default NewInvoice;