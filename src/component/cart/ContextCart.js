import React, { useContext } from "react";
import {BsArrowLeft} from "react-icons/bs"
import CartItems from "./CartItems";
import { CartContext } from "./Cart";

const ContextCart = () => {
    const {data} = useContext(CartContext)
    return(
        <>
            <header>
                <div className="h-14 px-3 py-4 border-b-2 border-solid border-secondary flex flex-row ">
                    <BsArrowLeft className="text-2xl text-gray-600"/>
                    <h3 className="text-sm font-bold text-gray-600 ml-2">continue shopping</h3>
                </div>
            </header>
            <section>
                <h1 className="text-xl px-3 py-4 font-bold text-gray-600">Shopping Cart</h1>
                <div className="px-10">
                    <div className="h-100 w-140 px-10 py-8 bg-secondary rounded-xl overflow-y-scroll grid grid-cols-1 grid-rows-1 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
                        {data?.map((curData) => (
                            <CartItems key={curData.propid} {...curData}/>
                            ))} 
                    </div>
                </div>
                <div className="py-10 text-center">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text1 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Generate Invoice
                    </button>
                </div>
            </section>
        </>
    );
}

export default ContextCart;