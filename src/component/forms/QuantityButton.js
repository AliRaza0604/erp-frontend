import React, { useState } from "react"
import {BsPlus, BsDash} from "react-icons/bs"

const QuantityButton = () => {

    const [num,setNum] = useState(1);

    const increment = () => {
        setNum(num + 1)
    }

    const decrement = () => {
        if(num > 1)
        {
            setNum(num - 1)
        }else
        {
            setNum(1)
        }
    }

    return(
    <div class="mb-2 flex flex-row">
        <div class="flex flex-row h-6 ">
            <button onClick={decrement} class=" h-full w-6  border-2 border-r-0 border-primary text-text3 hover:text-text1 hover:bg-primary  rounded-l cursor-pointer flex items-center justify-center">
                <BsDash/>
            </button>
            <input type="number" class="h-full w-20 text-center border-2 border-primary font-semibold text-sm text-text3 flex items-center" name="custom-input-number" value={num}></input>
            <button onClick={increment} class="h-full w-6  border-2 border-l-0 border-primary text-text3 hover:text-text1 hover:bg-primary rounded-r cursor-pointer  flex items-center justify-center">
                <BsPlus/>
            </button>
        </div>
    </div>
  );
}

export default QuantityButton



