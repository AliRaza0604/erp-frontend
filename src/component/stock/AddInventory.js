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

const AddInventory = () => {
    
    const [type,settype] = useState();
    const [rawRegisteration, setrawRegisteration] = useState({
        itemname: "",
        description:"",
        quantity: "",
    });

    const [productRegisteration, setproductRegisteration] = useState({
        name: "",
        price: "",
        description:"",
        quantity: "",
    });

    

    const rawhandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setrawRegisteration({...rawRegisteration, [name] : value})
    }

    const producthandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setproductRegisteration({...productRegisteration, [name] : value})
    }

    const handleSubmitRaw = async (e) => {
        e.preventDefault();

        try {
            let res = await instance.post('/api/inventory/', {

                "itemname":rawRegisteration.itemname,
                "description":rawRegisteration.description,
                "quantity":rawRegisteration.quantity
            },
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            }
            )
        }
        catch (e) {
            alert("Invalid data!");
            console.log(e);
  
        }

        setrawRegisteration({
        itemname: "",
        description:"",
        quantity: "",});
    }

    const handleSubmitProduct = async (e) => {
        //send to backend from here
        e.preventDefault();

        try {
            let res = await instance.post('/api/products/', {

                "name":productRegisteration.name,
                "description":productRegisteration.description,
                "price":productRegisteration.price,
                "quantity":productRegisteration.quantity
            },
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            })
        }
        catch (e) {
            alert("Invalid data!");
            console.log(e);

  
        }

        setproductRegisteration({
        name: "",
        description:"",
        price:"",
        quantity: "",});
    }
    return(
        <>
        <div className="col-span-6 sm:col-span-6 p-2">
            <input type="text"
              name="type"
              id="type"
              placeholder="Product or Raw ?"
              required
              value={type}
              onChange={(e) => settype(e.target.value)}
              className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
        </div>

        {
            (type === "raw" || type === "Raw")?
            <>
            <div className="p-2">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add New Raw Material</h3>
                        <p className="mt-1 text-sm pl-2 text-text3">
                        This product will be placed into inventory so be careful what you enter.
                        </p>
                    </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="" onSubmit={handleSubmitRaw}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                            
                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="product-name" className="block text-sm font-medium text-text2" >Product Name</label>
                                <input type="text"
                                name="itemname"
                                id="itemname"
                                required
                                value={rawRegisteration.itemname}
                                onChange={rawhandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>
                            
                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="product-description" className="block text-sm font-medium text-text2" >Product Description</label>
                                <input type="text"
                                name="description"
                                id="description"
                                required
                                value={rawRegisteration.description}
                                onChange={rawhandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                                <input type="number"
                                name="quantity"
                                id="quantity"
                                required
                                min= '0'
                                value={rawRegisteration.quantity}
                                onChange={rawhandleInput}
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
            </>:
            (type === "product" || type === "Product")?
            <>
            <div className="p-2">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add New Raw Material</h3>
                        <p className="mt-1 text-sm pl-2 text-text3">
                        This product will be placed into inventory so be careful what you enter.
                        </p>
                    </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="" onSubmit={handleSubmitProduct}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                            
                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="product-name" className="block text-sm font-medium text-text2" >Product Name</label>
                                <input type="text"
                                name="name"
                                id="name"
                                required
                                value={productRegisteration.name}
                                onChange={producthandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>
                            
                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="product-description" className="block text-sm font-medium text-text2" >Product Description</label>
                                <input type="text"
                                name="description"
                                id="description"
                                required
                                value={productRegisteration.description}
                                onChange={producthandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="price" className="block text-sm font-medium text-text2" >Price</label>
                                <input type="number"
                                name="price"
                                id="price"
                                required
                                min= '0'
                                value={productRegisteration.price}
                                onChange={producthandleInput}
                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-text2" >Quantity</label>
                                <input type="number"
                                name="quantity"
                                id="quantity"
                                required
                                min= '0'
                                value={productRegisteration.quantity}
                                onChange={producthandleInput}
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
            </>:null
        }
        
        </>
    );
}

export default AddInventory;