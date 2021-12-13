import React, { useContext } from "react";
import {BsCartCheck} from "react-icons/bs"
import {AiOutlineMinusCircle} from "react-icons/ai"
import QuantityButton from "../forms/QuantityButton";
import { CartContext } from "./Cart";

const CartItems = ({id,name,description,quantity}) => {
    const {removeItem, increment, decrement} = useContext(CartContext)
    return (
        <>
            <div className="h-28 w-130 bg-white rounded-lg ">
               <div className="px-4 py-6 flex items-center">
                    <div className="flex-shrink-0 h-12 w-16 ml-4">
                        <BsCartCheck className="h-12 w-16 text-secondary" />
                    </div>
                    <div className="ml-20">
                        <div className="text-lg font-medium text-gray-900 ">{name}</div>
                        <div className="text-sm text-gray-500">{description}</div>
                    </div>
                    <div className="ml-32">
                        <div className="text-lg font-medium text-gray-900 flex flex-row">
                        <button  onClick={() => decrement(id)}>-</button>
                        <input type="text" placeholder={quantity} disabled />
                        <button onClick={() => increment(id)}>+</button>
                        </div>
                      </div>
                    <div className="ml-32">
                        <input type='number'
                            placeholder='Price'
                            min='0'
                            // name={props.name}
                            // id={props.id}
                            // autoComplete={props.autoComplete}
                            className="h-6 w-32 focus:ring-primary focus:border-primary block shadow-sm sm:text-sm border-secondary rounded-md text-center"/>
                    </div>
                    {/* <div className="flex-shrink-0 h-8 w-8 ml-28">
                        <AiOutlineMinusCircle className="h-8 w-8 text-secondary hover:text-red-500" onClick={() => removeItem(id)}/>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default CartItems;