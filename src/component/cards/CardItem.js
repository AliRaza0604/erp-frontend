import React, { useState, useContext } from 'react';
import { BsLightbulbFill} from 'react-icons/bs';
import AvailableButton from '../forms/AvailableButton';
import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        delete: {
            'Content-Type': 'application/json'
        }
    }
  })


const CardItems = (props) => {

    const {data} = props;

    const removeProd = async () => {
      
        try {
            let res = await instance.delete(`/api/products/${data.prodid}/`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const removeRaw = async () => {
      
        try {
            let res = await instance.delete(`/api/inventory/${data.itemid}/`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    // const removeProduction = async () => {
      
    //     try {
    //         let res = await instance.delete(`/api/products/${data.prodid}/`,
    //             {
    //                 // headers: {
    //                 //     "Authorization": `Bearer ${localStorage.getItem('token')}`
    //                 // }
    //             }
    //         );
    //         console.log(res);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    
    return (
    <div className="m-1 w-62 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row shadow-md">
        <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
            {
                (props.type === 'product') ?
                <BsLightbulbFill className="h-10 w-10 text-primary" /> :
                (props.type === 'raw') ?
                <BsLightbulbFill className="h-10 w-10 text-primary" />:
                (props.type === 'prod') ?
                <BsLightbulbFill className="h-10 w-10 text-primary" />:null
            }
        </div>
        <div className="flex flex-col justify-between">
            {
                (props.type === 'product') ?
                <p className="text-lg text-primary">PKR<span className="mx-1 text-2xl">{data.price}</span>Rs/pc</p> :
                (props.type === 'prod') ?
                <p className="text-lg text-primary"><span className="mx-1 text-2xl">{data.status}</span></p>:null
            }
            {
                (props.type === 'product') ?
                <p className="text-base text-text3" title="ProductName">{data.name}</p> :
                (props.type === 'raw') ?
                <p className="text-base text-text3" title="ProductName">{data.itemname}</p> :
                (props.type === 'prod') ?
                <p className="text-base text-text3" title="ProductName">{data.startdate}</p> : null
            }
            {
                (props.type === 'product') ?
                <div className="flex flex-row">
                    <span className="text-base text-secondary">{data.description}</span>
                </div> :
                (props.type === 'raw') ?
                <div className="flex flex-row">
                    <span className="text-base text-secondary">{data.description}</span>
                </div> :
                (props.type === 'prod') ?
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
                </div>:
                (props.type === 'prod') ?
                <div className="mb-2 flex flex-row">
                    <label className="mr-2 w-20 text-text3 text-sm" >Quantity</label>
                    <input disabled className="h-6 w-20 text-center border-2 border-primary font-semibold text-sm text-text3 rounded-md flex items-center " value={data.quantity}/>
                </div>:null

            }
            <div className="flex flex-row justify-end">
            {
                (props.type === 'product') ?
                <>
                    <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeProd}  >Remove Item</button>
                </>:
                (props.type === 'raw') ?
                <>
                    <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeRaw}  >Remove Item</button>
                </>:null
                // (props.type === 'prod') ?
                // <>
                //     <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeProduction}  >Remove Item</button>
                // </>:null
                
            }
            </div>
        </div>
    </div>
    )
}

export default CardItems;