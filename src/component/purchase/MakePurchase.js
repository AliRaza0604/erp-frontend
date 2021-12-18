import React, {useState} from "react";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const MakePurchase = () => {

    const [purchaseRegisteration, setpurchaseRegisteration] = useState({
        purchdate:"",
        purchtype: "",
        unit:"",
        quantity: "",
        rate:"",
        amount:"",
        supplierid:"",
        itemid:"",
        
    });

    const purchasehandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setpurchaseRegisteration({...purchaseRegisteration, [name] : value})
    }



    const handleSubmitPurchase = async (e) => {
        //send to backend from here
        e.preventDefault();

        try {
            let res = await instance.post('/api/purchases/', {

                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },

                "purchdate":purchaseRegisteration.purchdate,
                "purchtype":purchaseRegisteration.purchtype,
                "unit":purchaseRegisteration.unit,
                "quantity":purchaseRegisteration.quantity,
                "rate":purchaseRegisteration.rate,   
                "amount":purchaseRegisteration.amount,
                "supplierid":purchaseRegisteration.supplierid,
                "itemid":purchaseRegisteration.itemid,
            })
        }
        catch (e) {
            alert("Invalid data!");
  
        }

        setpurchaseRegisteration({
        purchdate:"",
        purchtype: "",
        unit:"",
        quantity: "",
        rate: "",
        amount: "",
        supplierid:"",
        itemid:"",
        });
    }
    return(
        <>
            <div className="p-2">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add New Purchase</h3>
                        <p className="mt-1 text-sm pl-2 text-text3">
                        This product will be placed into inventory so be careful what you enter.
                        </p>
                    </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="" onSubmit={handleSubmitPurchase}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="purchdate" className="block text-sm font-medium text-text2" >Date of Purchase</label>
                                <input type="date"
                                name="purchdate"
                                id="purchdate"
                                required
                                format="YYYY-MM-DD"
                                value={purchaseRegisteration.purchdate}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="purchase-type" className="block text-sm font-medium text-text2" >Purchase Type</label>
                                <input type="text"
                                name="purchtype"
                                id="purchtype"
                                required
                                value={purchaseRegisteration.purchtype}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="unit" className="block text-sm font-medium text-text2" >Unit</label>
                                <input type="text"
                                name="unit"
                                id="unit"
                                min= '0'
                                value={purchaseRegisteration.unit}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                                <input type="text"
                                name="quantity"
                                id="quantity"
                                required
                                min= '0'
                                value={purchaseRegisteration.quantity}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="rate" className="block text-sm font-medium text-text2" >Rate</label>
                                <input type="text"
                                name="rate"
                                id="rate"
                                required
                                min= '0'
                                value={purchaseRegisteration.rate}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="amount" className="block text-sm font-medium text-text2" >Amount</label>
                                <input type="text"
                                name="amount"
                                id="amount"
                                required
                                min= '0'
                                value={purchaseRegisteration.amount}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="supplierid" className="block text-sm font-medium text-text2" >Supplier ID</label>
                                <input type="text"
                                name="supplierid"
                                id="supplierid"
                                required
                                min= '0'
                                value={purchaseRegisteration.supplierid}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="itemid" className="block text-sm font-medium text-text2" >Item ID</label>
                                <input type="text"
                                name="itemid"
                                id="itemid"
                                required
                                min= '0'
                                value={purchaseRegisteration.itemid}
                                onChange={purchasehandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>
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

export default MakePurchase;