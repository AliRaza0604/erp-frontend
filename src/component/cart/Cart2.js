import React from "react";
import CheckOut from "./CheckOut";

const Cart2 = () => {
    const [usertype, setproducttype] = useState(null);
    const handleusertype = obj => {
        setproducttype(obj.value);

        setproductRegisteration({...productRegisteration, role : obj.value})
    }
    const [productRegisteration, setproductRegisteration] = useState({
        productname: "",
        quantity: "",
        startdate: "",
        enddate: "",
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
        productname: "",
        quantity: "",
        startdate: "",
        enddate: "",});
    }
    return(
        <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add New Production</h3>
                <p className="mt-1 text-sm pl-2 text-text3">
                  This order will be placed into production so be careful what you enter.
                </p>
              </div>
            </div> */}
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="" onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      
                      
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

export default Cart2;