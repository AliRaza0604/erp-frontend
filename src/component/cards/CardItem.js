import React, { useState, useContext } from 'react';
import { BsLightbulbFill} from 'react-icons/bs';
import AvailableButton from '../forms/AvailableButton';
import { CartdataContext } from '../Stock';





const CardItems = (props) => {

    // const {addtocart} = useContext(CartdataContext)

    const {data} = props;
    // const [cartItems,setCartItems] = useState([]);
    // const AddItem = (data) => {
    //     if (cartItems.find((d) => d.id === data.id)) {
    //         setCartItems(cartItems.map((x) => {
    //             if (x.id === data.id) {
    //                 return {
    //                     ...x,
    //                     qty: x.qty + 1
    //                 };
    //             } else {
    //                 return x;
    //             }
    //         }));
    //     } else {
    //         setCartItems([...cartItems, data]);
    //     }
    //     console.log(data, cartItems);
    // };
    
    return (
    <div className="m-1 w-62 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row">
        <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
            {
                (props.type === 'product') ?
                <BsLightbulbFill className="h-10 w-10 text-primary" /> :
                (props.type === 'raw') ?
                <BsLightbulbFill className="h-10 w-10 text-primary" />:null
            }
        </div>
        <div className="flex flex-col justify-between">
            {
                (props.type === 'product') ?
                <p className="text-lg text-primary">PKR<span className="mx-1 text-2xl">{data.price}</span>Rs/pc</p> :
                (props.type === 'raw') ?
                <p className="text-lg text-primary"><span className="mx-1 text-2xl">{data.status}</span></p>:null
            }
            {
                (props.type === 'product') ?
                <p className="text-base text-text3" title="ProductName">{data.name}</p> :
                (props.type === 'raw') ?
                <p className="text-base text-text3" title="ProductName">{data.startdate}</p> : null
            }
            {
                (props.type === 'product') ?
                <div className="flex flex-row">
                    <span className="text-base text-secondary">{data.description}</span>
                </div> :
                (props.type === 'raw') ?
                <div className="flex flex-row">
                    <span className="text-base text-secondary">{data.enddate}</span>
                </div> : null
            }
            {
                (props.type === 'product') ?
                <div>
                    <AvailableButton available={data.quantity}/>
                </div>:
                (props.type === 'raw') ?
                <div className="mb-2 flex flex-row">
                    <label className="mr-2 w-20 text-text3 text-sm" >Quantity</label>
                    <input disabled className="h-6 w-20 text-center border-2 border-primary font-semibold text-sm text-text3 rounded-md flex items-center " value={data.quantity}/>
                </div>:null

            }
            <div className="flex flex-row justify-end">
            {
                (props.type === 'product') ?
                <>
                    <button id={`product`+props.id} className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1"  >Add To Cart</button>
                </>:null
                
            }
            </div>
        </div>
    </div>
    )
}

export default CardItems;